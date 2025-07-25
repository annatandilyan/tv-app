const CategoryLabel = ({ category }: { category: string }) => (
  <div className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
    {category}
  </div>
);

export default CategoryLabel;
