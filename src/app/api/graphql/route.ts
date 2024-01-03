import { createSchema, createYoga } from "graphql-yoga";
import { Context, createContext } from "@/prisma/db";
import bcrypt from "bcrypt";
import { generateToken } from "@/graphql/handlers/token";
import { GetUbication } from "@/graphql/handlers/geolocation";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();

const schema = createSchema({
  typeDefs: `
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    avatar: String
    posts: [Post!]!
    comments: [Comment!]!
    likes: [Like!]!
    dislikes: [Dislike!]!
  }

  type AuthUser {
    id: ID!
    username: String!
    password: String!
    email: String!
    avatar: String
    token: String!
  }

  type Coordenates {
    latitude: Float
    longitude: Float
  }

  type Post {
    id: ID!
    content: String!
    image: String
    video: String
    location: String
    user: User!
    comments: [Comment!]!
    likes: [Like!]!
    dislikes: [Dislike!]!
  }

  type Comment {
    id: ID!
    content: String!
    post: Post!
    user: User!
  }

  type Like {
    id: ID!
    post: Post!
    user: User!
  }

  type Dislike {
    id: ID!
    post: Post!
    user: User!
  }

  type Coordinates {
    id: ID!
    latitude: Float!
    longitude: Float!
    country: String!
    city: String!
    state: String!
    createdAt: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    posts: [Post!]!
    post(id: ID!): Post!
    lastCordenate: Coordinates!
  }

  type Mutation {
    createUser(
      username: String!
      password: String!
      email: String!
      avatar: String
    ): User!
    login(username: String!, password: String!): AuthUser!
    updateUser(id: ID!, username: String, email: String, avatar: String): User!
    deleteUser(id: ID!): User!
    createPost(
      user: ID!
      content: String!
      image: String
      video: String
      location: String
    ): Post!
    updatePost(
      id: ID!
      content: String
      image: String
      video: String
      location: String
    ): Post!
    deletePost(id: ID!): Post!
    createComment(userId: ID!, postId: ID!, content: String!): Comment!
    updateComment(id: ID!, content: String): Comment!
    deleteComment(id: ID!): Comment!
    createLike(userId: ID!, postId: ID!): Like!
    deleteLike(id: ID!): Like!
    createDislike(userId: ID!, postId: ID!): Dislike!
    deleteDislike(id: ID!): Dislike!
    addCoordinates(
      latitude: Float
      longitude: Float
      state: String
    ): Coordinates
  }

  type Subscription {
    latestCoordinates: Coordinates
  }
`,
  resolvers: {
    Query: {
      users: async (_parent: any, _args: any, context: Context) => {
        try {
          return await context.prisma.user.findMany({});
        } catch (error) {
          console.error("Error al obtener la lista de usuarios:", error);
          throw new Error(
            "Error inesperado al obtener la lista de usuarios. Por favor, inténtalo de nuevo."
          );
        }
      },
      user: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.user.findUnique({
            where: { id: args.id },
          });
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
          throw new Error(
            "Error inesperado al obtener el usuario. Por favor, inténtalo de nuevo."
          );
        }
      },
      posts: async (_parent: any, _args: any, context: Context) => {
        try {
          return await context.prisma.post.findMany({});
        } catch (error) {
          console.error("Error al obtener la lista de posts:", error);
          throw new Error(
            "Error inesperado al obtener la lista de posts. Por favor, inténtalo de nuevo."
          );
        }
      },
      post: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.post.findUnique({
            where: { id: args.id },
          });
        } catch (error) {
          console.error("Error al obtener el post:", error);
          throw new Error(
            "Error inesperado al obtener el post. Por favor, inténtalo de nuevo."
          );
        }
      },
      lastCordenate: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.coordinates.findFirst({
            orderBy: {
              createdAt: "desc",
            },
          });
        } catch (error) {
          console.error("Error al obtener la lista de cordenadas:", error);
          throw new Error(
            "Error inesperado al obtener la lista de cordenadas. Por favor, inténtalo de nuevo."
          );
        }
      },
    },
    Mutation: {
      createUser: async (_parent: any, args: any, context: Context) => {
        try {
          const hashedPassword = await bcrypt.hash(args.password, 10);
          const user = await context.prisma.user.create({
            data: {
              ...args,
              password: hashedPassword,
            },
          });
          return user;
        } catch (error) {
          console.error("Error al crear el usuario:", error);
          throw new Error(
            "Error inesperado al crear el usuario. Por favor, inténtalo de nuevo."
          );
        }
      },
      login: async (_parent: any, args: any, context: Context) => {
        try {
          const user = await context.prisma.user.findFirst({
            where: { username: args.username },
          });

          if (!user || !(await bcrypt.compare(args.password, user.password))) {
            throw new Error("Nombre de usuario o contraseña incorrectos.");
          }

          const token = generateToken(user);

          const data = {
            ...user,
            token,
            avatar: user.avatar || "default-avatar-url",
          };

          return data;
        } catch (error) {
          console.error("Error en la autenticación:", error);
          throw new Error(
            "Error inesperado en la autenticación. Por favor, verifica tus credenciales."
          );
        }
      },
      updateUser: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.user.update({
            where: { id: args.id },
            data: args,
          });
        } catch (error) {
          console.error("Error al actualizar el usuario:", error);
          throw new Error(
            "Error inesperado al actualizar el usuario. Por favor, inténtalo de nuevo."
          );
        }
      },
      deleteUser: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.user.delete({
            where: { id: args.id },
          });
        } catch (error) {
          console.error("Error al eliminar el usuario:", error);
          throw new Error(
            "Error inesperado al eliminar el usuario. Por favor, inténtalo de nuevo."
          );
        }
      },
      createPost: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.post.create({
            data: {
              ...args,
              user: {
                connect: { id: args.user },
              },
            },
          });
        } catch (error) {
          console.error("Error al crear el post:", error);
          throw new Error(
            "Error inesperado al crear el post. Por favor, inténtalo de nuevo."
          );
        }
      },
      updatePost: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.post.update({
            where: { id: args.id },
            data: args,
          });
        } catch (error) {
          console.error("Error al actualizar el post:", error);
          throw new Error(
            "Error inesperado al actualizar el post. Por favor, inténtalo de nuevo."
          );
        }
      },
      deletePost: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.post.delete({
            where: { id: args.id },
          });
        } catch (error) {
          console.error("Error al eliminar el post:", error);
          throw new Error(
            "Error inesperado al eliminar el post. Por favor, inténtalo de nuevo."
          );
        }
      },
      createComment: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.comment.create({
            data: {
              content: args.content,
              post: {
                connect: { id: args.postId },
              },
              user: {
                connect: { id: args.userId },
              },
            },
          });
        } catch (error) {
          console.error("Error al crear el comentario:", error);
          throw new Error(
            "Error inesperado al crear el comentario. Por favor, inténtalo de nuevo."
          );
        }
      },
      updateComment: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.comment.update({
            where: { id: args.id },
            data: { content: args.content },
          });
        } catch (error) {
          console.error("Error al actualizar el comentario:", error);
          throw new Error(
            "Error inesperado al actualizar el comentario. Por favor, inténtalo de nuevo."
          );
        }
      },
      deleteComment: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.comment.delete({
            where: { id: args.id },
          });
        } catch (error) {
          console.error("Error al eliminar el comentario:", error);
          throw new Error(
            "Error inesperado al eliminar el comentario. Por favor, inténtalo de nuevo."
          );
        }
      },
      createLike: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.like.create({
            data: {
              post: {
                connect: { id: args.postId },
              },
              user: {
                connect: { id: args.userId },
              },
            },
          });
        } catch (error) {
          console.error("Error al crear el like:", error);
          throw new Error(
            "Error inesperado al crear el like. Por favor, inténtalo de nuevo."
          );
        }
      },
      deleteLike: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.like.delete({
            where: { id: args.id },
          });
        } catch (error) {
          console.error("Error al eliminar el like:", error);
          throw new Error(
            "Error inesperado al eliminar el like. Por favor, inténtalo de nuevo."
          );
        }
      },
      createDislike: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.dislike.create({
            data: {
              post: {
                connect: { id: args.postId },
              },
              user: {
                connect: { id: args.userId },
              },
            },
          });
        } catch (error) {
          console.error("Error al crear el dislike:", error);
          throw new Error(
            "Error inesperado al crear el dislike. Por favor, inténtalo de nuevo."
          );
        }
      },
      deleteDislike: async (_parent: any, args: any, context: Context) => {
        try {
          return await context.prisma.dislike.delete({
            where: { id: args.id },
          });
        } catch (error) {
          console.error("Error al eliminar el dislike:", error);
          throw new Error(
            "Error inesperado al eliminar el dislike. Por favor, inténtalo de nuevo."
          );
        }
      },
      addCoordinates: async (_parent: any, args: any, context: Context) => {
        try {
          const { latitude, longitude, state } = args;

          const { country, city } = await GetUbication(latitude, longitude);

          const coordinates = await context.prisma.coordinates.create({
            data: {
              latitude,
              longitude,
              state,
              country,
              city,
            },
          });

          // Publicar la nueva coordenada a los suscriptores
          pubsub.publish("NEW_COORDINATES", { latestCoordinates: coordinates });
          console.log("Nuevas coordenadas publicadas:", coordinates);

          return coordinates;
        } catch (error) {
          console.error("Error al agregar las coordenadas:", error);
          throw new Error(
            "Error inesperado al agregar las coordenadas. Por favor, inténtalo de nuevo."
          );
        }
      },
    },
    Subscription: {
      latestCoordinates: {
        subscribe: () => pubsub.asyncIterator("NEW_COORDINATES"),
      },
    },
  },
});

const { handleRequest } = createYoga({
  graphqlEndpoint: "/graphql",
  schema,
  context: createContext,
  fetchAPI: {
    Request: Request,
    Response: Response,
  },
});

export { handleRequest as GET, handleRequest as POST };
