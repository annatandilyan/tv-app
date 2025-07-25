const MovieDescription = ({ description }: { description: string }) => (
  <p className="text-foreground text-lg max-w-xl leading-relaxed">
    {description}
  </p>
);

export default MovieDescription;
