
import styles from './App.module.css'
import PullRequestsPage from './pages/PullRequestsPage'
function App() {


  return (
    <section className={styles.appLayout}>
      <div className={styles.header}>
        <h1>Demo App</h1>
      </div>
      <div className={styles.main}>
      <PullRequestsPage />
      </div>
      <div className={styles.footer}></div>
    </section>
  )
}

export default App
