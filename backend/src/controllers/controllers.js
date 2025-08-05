import Note from "../model/notes.js";

export const getallnotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json(`Internal server error`);
    console.log(error);
  }
};

export const postnotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title: title,
      content: content,
    });
    await newNote.save();
    res.status(200).json({ message: "Note created successfully" });
  } catch (error) {
    res.status(500).json(`Internal server error`);
    console.log(error);
  }
};

export const updatenotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatednote = await Note.findByIdAndUpdate(req.params.id, { title, content },
      {
        new:true,
      }
    );
    if(!updatednote) return res.status(404).json({message:"Note Not Found"})
    res.status(200).json({ Message: "Note updated successfully" });
  } catch (error) {
    res.status(500).json(`Faild to update Note`);
    console.log(error);
  }
};

export const deletenotes = async (req, res) => {
  const {id} = req.params;

  try {
    const deletenotes = await Note.findByIdAndDelete(id);

    if(!deletenotes){
      return res.status(404).json({message:"Note not found"})
    }

    res.status(200).json({message:"Note delted successfully "})

    
  } catch (error) {
    res.status(500).json(`Faild to Delete Note`);
    console.log(error);
    
  }
};


export const getnotebyid = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching note by ID:", error);
    res.status(500).json({ message: "Failed to fetch note" });
  }
};
