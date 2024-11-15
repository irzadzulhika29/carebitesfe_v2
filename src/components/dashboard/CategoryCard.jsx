const CategoryCard = ({ categories }) => {
  return (
    <div className="my-5 flex flex-wrap gap-3">
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="border p-2 border-[#45c517] hover:cursor-pointer hover:bg-[#45c517] hover:text-white rounded-md inline-block text-[#45c517] text-md"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;