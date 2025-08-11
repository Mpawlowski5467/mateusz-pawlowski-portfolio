import { useState } from 'react'

export function SkillIcon({ skill, colorClass = '', className = '' }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-neutral/20 animate-pulse rounded-lg backdrop-blur-sm" />
      )}
      
      {/* Error fallback */}
      {hasError ? (
        <div className="w-6 h-6 bg-charcoal/20 rounded-lg flex items-center justify-center">
          <span className="text-xs font-bold text-charcoal/60">
            {skill.name.charAt(0)}
          </span>
        </div>
      ) : (
        <img
          src={skill.icon}
          alt={skill.name}
          className={`w-6 h-6 transition-all duration-200 group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          loading="lazy"
          width="24"
          height="24"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 border border-neutral/30 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}