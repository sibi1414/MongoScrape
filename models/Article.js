var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true   
    },

  link: {
    type: String,
    required: true,
    unique: true
  },
  summary:
  {
    type: String,
    required:true

  },
  unsaved: {
    type: Boolean,
    default:true
  },   
  userCreated: {
      type: Date,
      default: Date.now,
      unique: false
   },
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
    ]
});



// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
