import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import cn from "classnames";
import type {
  CardData,
  Category,
  Rarity,
  AddCardFormValues,
} from "../../types";
import "./AddCardForm.css";

interface AddCardFormProps {
  onAddCard: (card: Omit<CardData, "id" | "isFavorite">) => void;
}

export const AddCardForm: React.FC<AddCardFormProps> = ({ onAddCard }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AddCardFormValues>({
    defaultValues: {
      power: 50,
      defense: 50,
      speed: 50,
      category: "",
      rarity: "",
    },
  });

  const powerVal = watch("power");
  const defenseVal = watch("defense");
  const speedVal = watch("speed");

  const onSubmit: SubmitHandler<AddCardFormValues> = (data) => {
    onAddCard({
      title: data.title,
      image: data.image,
      category: data.category as Category,
      description: data.description,
      stats: {
        power: Number(data.power),
        defense: Number(data.defense),
        speed: Number(data.speed),
        rarity: data.rarity as Rarity,
      },
    });
    reset();
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Card</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="add-card-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              className={cn({ "input-error": errors.title })}
              placeholder="Card title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="error-text">{errors.title.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Image URL *</label>
            <input
              type="text"
              className={cn({ "input-error": errors.image })}
              placeholder="https://example.com/image.jpg"
              {...register("image", { required: "URL is required" })}
            />
            {errors.image && (
              <span className="error-text">{errors.image.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select
              className={cn({ "input-error": errors.category })}
              {...register("category", { required: "Select a category" })}
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="earth">Earth</option>
              <option value="air">Air</option>
            </select>
            {errors.category && (
              <span className="error-text">{errors.category.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Rarity *</label>
            <select
              className={cn({ "input-error": errors.rarity })}
              {...register("rarity", { required: "Select rarity" })}
            >
              <option value="" disabled>
                Select rarity
              </option>
              <option value="common">Common</option>
              <option value="rare">Rare</option>
              <option value="epic">Epic</option>
              <option value="legendary">Legendary</option>
            </select>
            {errors.rarity && (
              <span className="error-text">{errors.rarity.message}</span>
            )}
          </div>
        </div>

        <div className="form-group full-width">
          <label>Description *</label>
          <textarea
            className={cn({ "input-error": errors.description })}
            rows={3}
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span className="error-text">{errors.description.message}</span>
          )}
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Power: {powerVal}</label>
            <input type="range" min="0" max="100" {...register("power")} />
          </div>
          <div className="form-group">
            <label>Defense: {defenseVal}</label>
            <input type="range" min="0" max="100" {...register("defense")} />
          </div>
          <div className="form-group full-width">
            <label>Speed: {speedVal}</label>
            <input type="range" min="0" max="100" {...register("speed")} />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Card
        </button>
      </form>
    </div>
  );
};
