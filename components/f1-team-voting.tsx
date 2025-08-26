'use client'
import { useState } from 'react'

interface F1Team {
  id: string
  name: string
  shortName: string
  color: string
  drivers: string[]
  votes: number
}

const f1Teams: F1Team[] = [
  {
    id: 'mclaren',
    name: 'McLaren',
    shortName: 'MCL',
    color: 'from-orange-500 to-orange-600',
    drivers: ['Lando Norris', 'Oscar Piastri'],
    votes: 0
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    shortName: 'SF',
    color: 'from-red-600 to-red-700',
    drivers: ['Charles Leclerc', 'Lewis Hamilton'],
    votes: 0
  },
  {
    id: 'mercedes',
    name: 'Mercedes',
    shortName: 'MB',
    color: 'from-gray-400 to-gray-600',
    drivers: ['George Russell', 'Kimi Antonelli'],
    votes: 0
  },
  {
    id: 'redbull',
    name: 'Red Bull Racing',
    shortName: 'RB',
    color: 'from-blue-600 to-blue-700',
    drivers: ['Max Verstappen', 'Yuki Tsunoda'],
    votes: 0
  },
  {
    id: 'astonmartin',
    name: 'Aston Martin',
    shortName: 'AM',
    color: 'from-green-600 to-green-700',
    drivers: ['Fernando Alonso', 'Lance Stroll'],
    votes: 0
  },
  {
    id: 'williams',
    name: 'Williams',
    shortName: 'WIL',
    color: 'from-blue-400 to-blue-500',
    drivers: ['Alexander Albon', 'Carlos Sainz'],
    votes: 0
  },
  {
    id: 'alpine',
    name: 'Alpine',
    shortName: 'ALP',
    color: 'from-pink-500 to-pink-600',
    drivers: ['Pierre Gasly', 'Franco Colapinto'],
    votes: 0
  },
  {
    id: 'haas',
    name: 'Haas',
    shortName: 'HAS',
    color: 'from-gray-500 to-gray-600',
    drivers: ['Esteban Ocon', 'Oliver Bearman'],
    votes: 0
  },
  {
    id: 'kicksauber',
    name: 'Kick Sauber',
    shortName: 'KS',
    color: 'from-green-500 to-green-600',
    drivers: ['Nico Hulkenberg', 'Gabriel Bortoleto'],
    votes: 0
  },
  {
    id: 'racingbulls',
    name: 'Racing Bulls',
    shortName: 'RBL',
    color: 'from-indigo-500 to-indigo-600',
    drivers: ['Liam Lawson', 'Isack Hadjar'],
    votes: 0
  }
]

export default function F1TeamVoting() {
  const [teams, setTeams] = useState<F1Team[]>(f1Teams)
  const [userVotes, setUserVotes] = useState<Set<string>>(new Set())
  const [showNotification, setShowNotification] = useState<string | null>(null)

  const handleVote = (teamId: string) => {
    if (userVotes.has(teamId)) {
      // Remove vote
      setTeams(teams.map(team => 
        team.id === teamId ? { ...team, votes: team.votes - 1 } : team
      ))
      setUserVotes(prev => {
        const newVotes = new Set(prev)
        newVotes.delete(teamId)
        return newVotes
      })
      setShowNotification(`Removed vote for ${teams.find(t => t.id === teamId)?.name}`)
    } else {
      // Add vote
      setTeams(teams.map(team => 
        team.id === teamId ? { ...team, votes: team.votes + 1 } : team
      ))
      setUserVotes(prev => new Set([...prev, teamId]))
      setShowNotification(`Voted for ${teams.find(t => t.id === teamId)?.name}! 🏁`)
    }

    // Clear notification after 3 seconds
    setTimeout(() => setShowNotification(null), 3000)
  }

  const totalVotes = teams.reduce((sum, team) => sum + team.votes, 0)
  const sortedTeams = [...teams].sort((a, b) => b.votes - a.votes)

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
          Vote for Your Favorite <span className="text-gradient">F1 Teams</span>
        </h2>
        <p className="text-lg opacity-75 mb-2">
          Click on teams to vote for your favorites for the 2025 season
        </p>
        <div className="badge badge-primary">
          🗳️ Total votes: {totalVotes}
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-24 right-6 z-50 animate-slide-up">
          <div className="badge badge-primary shadow-lg">
            {showNotification}
          </div>
        </div>
      )}

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {sortedTeams.map((team) => {
          const hasVoted = userVotes.has(team.id)
          const votePercentage = totalVotes > 0 ? (team.votes / totalVotes) * 100 : 0
          
          return (
            <div
              key={team.id}
              onClick={() => handleVote(team.id)}
              className={`card cursor-pointer transition-all duration-300 hover:scale-105 relative ${
                hasVoted ? 'ring-2 ring-[var(--brand-primary)] shadow-[var(--shadow-f1)]' : ''
              }`}
            >
              {/* Vote Badge */}
              {team.votes > 0 && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                  {team.votes}
                </div>
              )}
              
              {/* Team Logo */}
              <div className={`w-12 h-12 bg-gradient-to-br ${team.color} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <span className="text-white font-bold text-sm">{team.shortName}</span>
              </div>
              
              {/* Team Name */}
              <h3 className="font-display font-semibold text-sm mb-2 text-center">{team.name}</h3>
              
              {/* Drivers */}
              <div className="text-xs opacity-60 mb-3 text-center">
                {team.drivers.map((driver) => (
                  <div key={driver}>
                    {driver.split(' ').pop()}
                  </div>
                ))}
              </div>
              
              {/* Vote Percentage Bar */}
              {totalVotes > 0 && (
                <div className="w-full bg-[var(--border)] rounded-full h-1.5 mb-2">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${votePercentage}%` }}
                  />
                </div>
              )}
              
              {/* Vote Percentage */}
              {totalVotes > 0 && (
                <div className="text-xs opacity-60 text-center mb-2">
                  {votePercentage.toFixed(1)}%
                </div>
              )}
              
              {/* Vote Status */}
              <div className="text-xs text-center">
                {hasVoted ? (
                  <span className="text-[var(--brand-primary)] font-medium">✓ Voted</span>
                ) : (
                  <span className="opacity-60">Click to vote</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Top 3 Teams */}
      {totalVotes > 0 && (
        <div className="card">
          <h3 className="font-display text-xl font-semibold mb-6 text-center">
            🏆 Most Popular Teams
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sortedTeams.slice(0, 3).map((team, index) => {
              const medals = ['🥇', '🥈', '🥉']
              const votePercentage = (team.votes / totalVotes) * 100
              
              return (
                <div key={team.id} className="text-center">
                  <div className="text-3xl mb-3">{medals[index]}</div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${team.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <span className="text-white font-bold text-lg">{team.shortName}</span>
                  </div>
                  <div className="font-display font-semibold mb-1">{team.name}</div>
                  <div className="text-[var(--brand-primary)] font-bold">
                    {team.votes} votes ({votePercentage.toFixed(1)}%)
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}