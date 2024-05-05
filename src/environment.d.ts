declare global {
	interface ProcessEnv {
		DB_HOST: string;
		DB_USER: string;
		DB_NAME: string;
		DB_PASSWORD: string;
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
