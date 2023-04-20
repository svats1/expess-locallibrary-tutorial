const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
});

// Display detail page for a specific Author
exports.author_detail = asyncHandler(async (erq, res, next) => {
  res.send(`Not Implemented: Author detail: ${req.params.id}`);
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
