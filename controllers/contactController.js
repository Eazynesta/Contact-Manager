//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
};

//@desc Get a contact
//@route GET /api/contacts/"id"
//@access public

const getContact = (req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};

//@desc create New contacts
//@route POST /api/contacts
//@access public

const createContact = (req,res)=>{
    res.status(201).json({message: "Create contacts"});
};

//@desc Update contact
//@route POST /api/contacts/:id
//@access public

const updateContact = (req,res)=>{
    res.status(200).json({message: `Update contact for ${req.params.id}`});
};

//@desc Delete contact
//@route POST /api/contacts/:id
//@access public

const deleteContact = (req,res)=>{
    res.status(200).json({message: `delete contact for ${req.params.id}`});
};



module.exports = {createContact,getContact,getContacts,updateContact,deleteContact};