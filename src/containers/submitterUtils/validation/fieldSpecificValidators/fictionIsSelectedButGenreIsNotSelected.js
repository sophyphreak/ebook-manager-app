const fictionIsSelectedButGenreIsNotSelected = ({ nonFictionOrFiction, genre }) => (
  nonFictionOrFiction === 'Fiction' && genre === 'Please select'
);

export default fictionIsSelectedButGenreIsNotSelected;