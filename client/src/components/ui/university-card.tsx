interface UniversityCardProps {
  name: string;
  description: string;
  image: string;
  programs: string[];
}

export default function UniversityCard({ name, description, image, programs }: UniversityCardProps) {
  const programColors = ["bg-primary/10 text-primary", "bg-accent/10 text-accent", "bg-secondary/10 text-secondary"];

  return (
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border card-hover" data-testid={`university-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <img 
        src={image} 
        alt={`${name} campus`} 
        className="w-full h-48 object-cover rounded-lg mb-4" 
        data-testid={`university-image-${name.toLowerCase().replace(/\s+/g, '-')}`}
      />
      <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`university-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</h3>
      <p className="text-muted-foreground mb-4" data-testid={`university-description-${name.toLowerCase().replace(/\s+/g, '-')}`}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {programs.map((program, index) => (
          <span 
            key={index} 
            className={`px-3 py-1 rounded-full text-sm ${programColors[index % programColors.length]}`}
            data-testid={`university-program-${index}`}
          >
            {program}
          </span>
        ))}
      </div>
    </div>
  );
}
