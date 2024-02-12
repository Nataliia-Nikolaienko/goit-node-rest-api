import Jimp from "jimp";

export const NewAvatar = Jimp.read("avatar.png", (err, avatar) => {
  if (err) throw err;
  avatar.resize(250, 250).quality(60).greyscale().write("avatarNew.jpg");
});
