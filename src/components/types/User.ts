export interface Product {
  quantity: number;
  category: string;
}

export interface OnlyInteraction {
  like: number;
  dislike: number;
}

export interface AnswerCommentStream {
  id_user: string;
  content: string;
  interaction: OnlyInteraction[];
}

export interface InteractionCommentsStream {
  like: number;
  dislike: number;
  answers: AnswerCommentStream[];
}

export interface CommentStreams {
  id_user: string;
  content: string;
  interaction: InteractionCommentsStream[];
}

export interface StreamRealized {
  live_stream_id: string;
  stream_key: string;
  playbackId: string;
  duration: number;
  comments: CommentStreams[];
}

export interface StreamsViews {
  live_stream_id: string;
  stream_key: string;
  playbackId: string;
  duration_in_live: number;
}

export interface Store {
  rol: string;
  name: string;
  products: Product[];
}

export interface Stream {
  rol: string;
  views: StreamsViews[];
  realized: StreamRealized[];
}

export interface UserTypes {
  username: string;
  password: string;
  avatar: string;
  email: string;
  stream: Stream[];
  store: Store[];
  token: string;
}
