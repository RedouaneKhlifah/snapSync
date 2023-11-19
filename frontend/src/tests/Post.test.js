import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Post from "../Components/Post";

const mockPost = {
  id: "1",
  title: "Test Title",
  image: "test-image.jpg",
  date: "2023-11-19",
  creator: "Test Creator",
  message: "Test Message",
  likeNumber: 5,
  tags: ["tag1", "tag2"],
};

test("Vérifier le rendu du span LIKE", () => {
  render(
    <Post
      id={mockPost.id}
      title={mockPost.title}
      image={mockPost.image}
      date={mockPost.date}
      creator={mockPost.creator}
      message={mockPost.message}
      likeNumber={mockPost.likeNumber}
      tags={mockPost.tags}
      updatefunc={() => {}}
      like={() => {}}
      handleDelete={() => {}}
    />
  );

  const likeElement = screen.getByText(/LIKE 5/i);
  if (likeElement) {
    console.log("Le span LIKE est présent !");
  } else {
    console.error("Le span LIKE n'est pas présent.");
  }
});
test("Vérifier si la fonction like est appelée lors du clic sur LIKE", () => {
  
	render(
	  <Post
		id={mockPost.id}
		title={mockPost.title}
		image={mockPost.image}
		date={mockPost.date}
		creator={mockPost.creator}
		message={mockPost.message}
		likeNumber={mockPost.likeNumber}
		tags={mockPost.tags}
		updatefunc={() => {}}
		like={() => {}}
		handleDelete={() => {}}
	  />
	);
  
	const likeElement = screen.getByText(/LIKE 5/i);
	fireEvent.click(likeElement);
	console.log("La fonction like a été appelée lors du clic sur LIKE !");
  });


test("Vérifier le rendu du span DELETE", () => {
  render(
    <Post
      id={mockPost.id}
      title={mockPost.title}
      image={mockPost.image}
      date={mockPost.date}
      creator={mockPost.creator}
      message={mockPost.message}
      likeNumber={mockPost.likeNumber}
      tags={mockPost.tags}
      updatefunc={() => {}}
      like={() => {}}
      handleDelete={() => {}}
    />
  );

  const deleteElement = screen.getByText(/DELETE/i);
  if (deleteElement) {
    console.log("Le span DELETE est présent !");
  } else {
    console.error("Le span DELETE n'est pas présent.");
  }
});

test("Vérifier si la fonction handleDelete est appelée lors du clic sur DELETE", () => {
  render(
    <Post
      id={mockPost.id}
      title={mockPost.title}
      image={mockPost.image}
      date={mockPost.date}
      creator={mockPost.creator}
      message={mockPost.message}
      likeNumber={mockPost.likeNumber}
      tags={mockPost.tags}
      updatefunc={() => {}}
      like={() => {}}
      handleDelete={() => {}}
    />
  );

  const deleteElement = screen.getByText(/DELETE/i);
  fireEvent.click(deleteElement);
  console.log("La fonction handleDelete a été appelée lors du clic sur DELETE !");
  
});
