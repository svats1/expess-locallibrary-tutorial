const Author = require("../models/author");
const asyncHandler = require("express-async-handler");
const Book = require("../models/book");
const { body, validationResult } = require("express-validator");

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
});

// Display detail page for a specific Author.
exports.author_detail = asyncHandler(async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    // No results.
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor,
  });
});

// Display Author create form on GET
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author create GET");
});

// Display Author create on POST
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author create POST");
});

// Display Author delete form on GET
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author delete GET");
});

// Handle Author delete on POST
exports.author_delete_post = asyncHandler(async (eq, res, next) => {
  res.send("Not implemented: Author delete POST");
});

// Display Author update form on GET
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author update GET");
});

// Handle Author updatet on POST
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: Author update POST");
});
