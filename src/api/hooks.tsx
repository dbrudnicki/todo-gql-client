import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
import { graphql } from "../gql/gql";

const gqlClient = new GraphQLClient("http://localhost:4000");

const GET_TODOS = graphql(`
  query GetTodos {
    todos {
      id
      title
      completed
    }
  }
`);

export function useTodoList() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => gqlClient.request(GET_TODOS),
  });
}
