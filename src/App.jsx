import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DeOliveiraDev.png',
      name: 'Vinícius Oliveira',
      role: 'Front-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projetinho no meu github, dá uma olhada lá!'},
      {type: 'link', content: 'github.com.br/DeOliveiraDev'}
    ],
    publishedAt: new Date('2022-12-05 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/StephanieCGs.png',
      name: 'Stephanie Castro',
      role: 'Back-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Java é a melhor linguagem do mundo!'},
      {type: 'paragraph', content: 'Change my mind'},
    ],
    publishedAt: new Date('2022-12-05 21:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/gilbertoej.png',
      name: 'Gilberto Evangelista',
      role: 'Front-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Não existe melhor linguagem, todas são boas mas, eu sempre vou descordar do Vinícius Oliveira'},
      {type: 'paragraph', content: 'Por que sou otário!'},
    ],
    publishedAt: new Date('2022-12-05 21:30:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                /> 
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

