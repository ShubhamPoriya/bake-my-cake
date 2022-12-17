import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Cakes Delivered To You</h2>
      <p>
        Choose and order the best cake for your special occasion. We bake it
        fresh on orders.
      </p>
      <p>
        All our cakes are vegetarian. We also provide with VEGAN options for
        selected cake varieties.
      </p>
    </section>
  );
};

export default MealsSummary;
