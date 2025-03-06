interface VaultBannerProps {
  className?: string;
}

export default function VaultBanner({ className = "" }: VaultBannerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img
        src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C197705892-1740258866716-node-6%3A72-1740258864303.png"
        alt="Golden vault door with metallic finish and central locking mechanism"
        className="w-full h-[242px] object-cover"
      />
    </div>
  );
}
