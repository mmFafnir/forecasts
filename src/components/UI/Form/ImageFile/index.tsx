"use client";

import { FC } from "react";
import styles from "./imageFile.module.scss";
import Image from "next/image";

const ImageFile: FC = () => {
  return (
    <div className={styles.body}>
      <input type="file" />
      <div className={styles.img}>
        <Image src={"/img/person.png"} alt="asdasd" width={80} height={80} />
      </div>
      <button type="button">
        <Image
          src={"/img/icons/camera.svg"}
          alt="camera"
          width={28}
          height={28}
        />
      </button>
    </div>
  );
};

export default ImageFile;
