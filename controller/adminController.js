const contact = require("../models/contactModel");
const carrerfield = require("../models/carrerfieldModel");
const users = require("../models/userModel");
const feedback = require("../models/feedbacks");
const { response } = require("express");

// inquiry/contact view admin

exports.contactViewAdmin = async (req, res) => {
  try {
    const contactData = await contact.find();
    res.status(200).json({ message: "contact user are here ", contactData });
  } catch (err) {
    console.log(err);
  }
};

// carrefielsAdd by admin

exports.carrerfieldAdd = async (req, res) => {
  try {
    const { coursename, avgsalary, description, category } = req.body;
    const thumbnail = req.file.filename;
    console.log(thumbnail);
    const courseExisting = await carrerfield.findOne({ coursename });
    console.log(courseExisting);
    if (courseExisting) {
      res.status(400).json("Carrefield Existing");
    } else {
      const carrefieldnew = new carrerfield({
        coursename,
        avgsalary,
        description,
        category,
        thumbnail,
      });
      await carrefieldnew.save();
      res.status(200).json({ message: " Carrerfield Saved", carrefieldnew });
    }
    // res.send('inside the function');
  } catch (err) {
    console.log(err);

    res.send("error", err);
  }
};

// carrerfield view admin

exports.carrerfieldAdminView = async (req, res) => {
  try {
    const carrefields = await carrerfield.find().sort({ _id: -1 });
    res.status(200).json({ message: "carrerfieds  are here ", carrefields });
  } catch (err) {
    console.log(err);
  }
};

// admin user view

exports.viewUsers = async (req, res) => {
  try {
    const userData = await users
      .find({ role: { $ne: "admin" } })
      .sort({ _id: -1 });

    res.status(200).json({ message: "user data", userData });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ succes: false, message: "Failed to fetch users", err });
  }
};

exports.setUserActiveStatus = async (req, res) => {
  const { status, email } = req.body;
  try {
    const updateStatus = await users.findOneAndUpdate(
      { email },
      { $set: { status } },
      { new: true },
    );
    console.log(updateStatus);
    await updateStatus.save();

    res
      .status(200)
      .json({ succes: true, message: "user Status Updated", updateStatus });

    // res.send('inside try')
  } catch (err) {
    console.log("error in controller", err);
  }
};

exports.adminfeedbackview = async (req, res) => {
  try {
    const feedbackdata = await feedback.find().sort({ _id: -1 });
    res.status(200).json({ message: "feedback details", feedbackdata });
  } catch (err) {
    console.log(err);
    res.status(402).json({ message: "error... try after some time" });
  }
};

// update career filelds
exports.carrerfieldupdate = async (req, res) => {
  try {
    console.log(req.body);
    const { _id, coursename, avgsalary, description, category } = req.body;
    const thumbnail = req.file?.filename || req.body.thumbnail;
    console.log(thumbnail);
    console.log(req.body);
    // res.send('inside try')
    const updatecareefield = await carrerfield.findOneAndUpdate(
      { _id },
      { $set: { coursename, avgsalary, description, category, thumbnail } },
      { new: true },
    );

    res.status(200).json({ succes: true, message: "data", updatecareefield });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ succes: false, message: "error in  back end logic", err });
  }
};

// delete carrer filed

exports.carrerfieldDelete = async (req, res) => {
  const { id } = req.body;
  console.log(req.body);

  try {
    const deletecarrerfiled = await carrerfield.findByIdAndDelete({ _id: id });
    res.status(200).json({ succes: true, message: "succesfull deleted" });
  } catch (err) {
    console.log("err in delet", err);

    res
      .status(500)
      .json({ succes: false, message: "delete not completed", err });
  }
};
