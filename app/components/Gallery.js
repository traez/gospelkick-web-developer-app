/*
The Gallery component is responsible for rendering the entire gallery. It uses the StateContext to get the current state of the application, including the search term and the data to be rendered. It also uses the DndContext and SortableContext components from @dnd-kit/sortable to implement drag-and-drop functionality for the gallery.
*/
"use client";
import Image from "next/image";
import { useContext } from "react";
import { StateContext } from "../StateProvider";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ dataToRenderx }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: dataToRenderx.id,
    });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <article ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <div className="flag-container">
        <Image
          src={`/images/${dataToRenderx.flag}`}
          alt=""
          fill
          sizes="(min-width: 400px) 100vw"
          data-country={dataToRenderx.country.toLowerCase()}
          data-continent={dataToRenderx.continent.toLowerCase()}
        />
      </div>
      <ul>
        <li>{dataToRenderx.country}</li>
        <li>{dataToRenderx.continent}</li>
      </ul>
    </article>
  );
}

export default function Gallery() {
  const {
    searchTerm,
    setSearchTerm,
    dataToRender,
    setDataToRender,
    handleSignOut,
  } = useContext(StateContext);

  function onDragEnd(event) {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setDataToRender((dataToRender) => {
      const oldIndex = dataToRender.findIndex(
        (dataToRenderx) => dataToRenderx.id === active.id
      );
      const newIndex = dataToRender.findIndex(
        (dataToRenderx) => dataToRenderx.id === over.id
      );
      return arrayMove(dataToRender, oldIndex, newIndex);
    });
  }

  return (
    <section className="section-gallery">
      <div className="searchbar-button">
        <input
          type="search"
          placeholder="Search by Continent"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <div className="section-gallery-div">
        <DndContext
          id="unique-dnd-context-id"
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext items={dataToRender}>
            {dataToRender.map((dataToRenderx) => (
              <SortableItem
                key={dataToRenderx.id}
                dataToRenderx={dataToRenderx}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </section>
  );
}
