import Tutorial from "../models/Tutorial.js";

// GET all tutorials
export const getTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.findAll();
    res.status(200).json(tutorials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new tutorial
export const createTutorial = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    
    // Video path from multer
    const fileName = req.file ?req.file.filename :null;
    const videoUrl = `uploads/${fileName}`;


    if (!videoUrl) return res.status(400).json({ message: "Video is required" });

    const newTutorial = await Tutorial.create({ title, description, category, videoUrl });
    res.status(201).json(newTutorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
