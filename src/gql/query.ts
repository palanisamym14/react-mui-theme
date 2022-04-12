import { gql } from '@apollo/client';
export const fragments = {
    theme: gql`fragment ThemeFragment on ThemePalette {
    id
    }`
}

export const LOGIN_MUTATION = gql`
  mutation Login($body: UserInfoInput!) {
  login(body: $body){
   token
  }
}
`;


export const THEME_APPLY_MUTATION = gql`
  mutation UpdateTheme($body: ThemePaletteInput!) {
  updateTheme(body: $body){
   primary
   secondary
  }
}
`;

export const GET_THEME = gql`
  query GetTheme {
  getTheme {
   primary
   secondary
  }
}
`;

// const { data: , loading: fetching } = useQuery(
//     GET_,
//     {
//         skip: !createMode,
//         fetchPolicy: 'network-only',
//     }
// );