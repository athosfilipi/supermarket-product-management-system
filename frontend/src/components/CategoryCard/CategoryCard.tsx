import React from "react";
import {
  CategoryContainer,
  CategoryDescription,
  CategoryImage,
  CategoryTitle,
} from "./CategoryCard.style";

type TCategoryCard = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
};

export default function CategoryCard({
  children,
  title,
  description,
  imgProps
}: TCategoryCard) {
  return (
    <CategoryContainer>
      {imgProps && <CategoryImage className="category-image" {...imgProps} />}
      {title && <CategoryTitle className="category-title">{title}</CategoryTitle>}
      {description && <CategoryDescription className="category-description">{description}</CategoryDescription>}
      {children}
    </CategoryContainer>
  );
}
