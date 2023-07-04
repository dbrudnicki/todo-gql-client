import { GraphQLClient } from "graphql-request";
import { graphql } from "../gql";
import { useMutation, useQuery } from "react-query";
import { client } from "../client";

const gqlClient = new GraphQLClient("http://localhost:4000");

const getTodos = graphql(`
  query GetTodos {
    todos {
      id
      title
      completed
    }
  }
`);

const addTodo = graphql(`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
    }
  }
`);

const toggleCompleted = graphql(`
  mutation ToggleCompleted($id: String!) {
    toggleCompleted(id: $id) {
      id
    }
  }
`);

const deleteTodo = graphql(`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
    }
  }
`);

const onSuccess = () => client.invalidateQueries(["todos"]);

export function useTodos() {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: () => gqlClient.request(getTodos),
  });

  const addTodoFn = useMutation({
    mutationFn: (title: string) => gqlClient.request(addTodo, { title }),
    onSuccess,
  });

  const toggleCompletedFn = useMutation({
    mutationFn: (id: string) => gqlClient.request(toggleCompleted, { id }),
    onSuccess,
  });

  const deleteTodoFn = useMutation({
    mutationFn: (id: string) => gqlClient.request(deleteTodo, { id }),
    onSuccess,
  });

  return {
    todos: data?.todos,
    isLoading,
    isSuccess,
    isError,
    addTodo: addTodoFn.mutate,
    toggleCompleted: toggleCompletedFn.mutate,
    deleteTodo: deleteTodoFn.mutate,
  };
}
