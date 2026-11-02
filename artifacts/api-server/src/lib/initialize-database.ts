import { pool } from "@workspace/db";

/** Creates the small application schema idempotently before the API starts. */
export async function initializeDatabase(): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      email varchar(254) NOT NULL,
      display_name varchar(40) NOT NULL,
      password_hash text NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now()
    );
    CREATE UNIQUE INDEX IF NOT EXISTS users_email_unique ON users (email);

    CREATE TABLE IF NOT EXISTS auth_sessions (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      token_hash varchar(64) NOT NULL UNIQUE,
      user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      expires_at timestamptz NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now()
    );
    CREATE INDEX IF NOT EXISTS auth_sessions_user_id_idx ON auth_sessions (user_id);

    CREATE TABLE IF NOT EXISTS leaderboard (
      user_id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
      points integer NOT NULL,
      correct integer NOT NULL,
      total integer NOT NULL,
      max_streak integer NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `);
}
