import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Kibble/Dry',
    description: 'Dry food is the most economical type of commercial pet food, and this is the reason that many owners choose it for their pet',
    price: 12.99,
  },
  {
    id: 'm2',
    name: 'Canned',
    description: 'If you decide to feed your pet canned food, it is best to go with a kind that is labeled 100% nutritionally complete.',
    price: 18.5,
  },
  {
    id: 'm3',
    name: 'Semi-Moist',
    description: 'Foods shaped like pork chops, burgers, or other meaty foods',
    price: 17.99,
  },
  {
    id: 'm4',
    name: 'Home Cooked',
    description: 'If you decide to feed your pet a home-cooked diet, get well acquainted with canine nutrition so you can be sure your pet is not missing out on any vital nutrients.',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Raw',
    description: 'A raw diet consists of raw meat, preferably with some bones (never cooked bones, only raw) and organs mixed in, as bones are a natural source of phosphorus and calcium.',
    price: 20.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
