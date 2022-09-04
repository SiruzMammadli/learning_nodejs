import Photo from "../models/photoModel.js";

export async function createPhoto(req, res) {
  try {
    const photo = await Photo.create(req.body);
    res.status(201).json({
      succeded: true,
      photo,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
}

export async function getListPhotos(req, res) {
  try {
    const photos = await Photo.find({});
    res.status(200).render("photos", {
      photos,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
}

// export async function getSimplePhoto(req, res) {
//   try {
//     const photo = await Photo.findById({_id: req.params.id});
//     res.status(200).render("photo", {
//       photo,
//     });
//   } catch (error) {
//     res.status(500).json({
//       succeded: false,
//       error,
//     });
//   }
// }