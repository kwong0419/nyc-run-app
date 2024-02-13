"use client"
import Image from 'next/image'
import { teams, event,tags } from "./Data/data.js"
import { use, useEffect } from 'react'

export default function Home() {

  const FilterTeamTagByDay = (day: string) => {
    const filteredTeamsByDay = tags.filter((team) => team.days.includes(day))
    const filteredTeams = teams.filter((team) => {
      filteredTeamsByDay.some((tag) => tag.team_id === team.team_id)
      for (let i = 0; i < filteredTeamsByDay.length; i++) {
        if (filteredTeamsByDay[i].team_id === team.team_id) {
          return team
        }
      }
    })
    console.log(filteredTeams)
  }

  useEffect(() => {
    FilterTeamTagByDay("Saturday")
  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello World</p>
      {/* Map Section */}
      <h2 className="text-3xl font-bold">Map</h2>
      {/* Search Section */}
      <h2 className="text-3xl font-bold">Search</h2>
      {/* search bar */}
      <input type="text" placeholder="Search" />
      {/* filter by day */}
      <select>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select> 
      {/* Team Card Section */}
      <h2 className="text-3xl font-bold">Teams</h2>
        {teams.map((team, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <Image src={team.image} alt={team.name} width={100} height={100} />
            <p>{team.name}</p>
          </div>
        ))}
    </main>
  )
}
