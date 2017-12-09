import carousel from "./modules/carousel";

carousel
  .init()
  .then(() => import("./modules/banner")
    .then(banner => banner.init())
  );
