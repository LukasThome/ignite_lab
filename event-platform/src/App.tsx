import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"


//query do graphQL
const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title

    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  //busca todas as lessons do graphCMS, utilizando a query do graphQL acima
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  //retorna o conteudo do array data
  console.log(data);

  return ( 
    //retorna uma lista com os respectivos dados solicitados na query em tela
   <ul> 
    {data?.lessons.map(lesson  => {
      return <li key={lesson.id}>{lesson.title}</li>
    })}
   </ul>
  )
}

export default App
