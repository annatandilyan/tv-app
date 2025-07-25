const UserProfile: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="p-4 animate-fade-in shadow-2xl">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-semibold">
            {name[0]}
          </span>
        </div>
        <div>
          <p className="text-sidebar-foreground font-medium">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
