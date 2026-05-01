Meant to be used with OBS as a scoreboard for sports, specifically volleyball.

Scoreboard Operator Mode

![scoreboard edit](https://github.com/user-attachments/assets/dc0a4394-0f88-4813-92dc-6d2fbec1d61a)

Admin Page

![admin page](https://github.com/user-attachments/assets/fb4219a4-a194-4747-a06e-13bca28308e3)

Green screen scoreboard for OBS

![greenscreen scoreboard](https://github.com/user-attachments/assets/c10febbb-7c98-4fb3-9419-ecf9659ea8bd)

Docker Compose env selection

- By default Docker Compose will use the production env file `.env.prod` which points the app to the internal `db` service (no host port 5432 exposed).
- To run with your local/testing `.env` instead, set the `ENV_FILE` environment variable before starting Compose:

	- macOS / Linux:

		```bash
		ENV_FILE=.env docker compose up -d
		```

	- Windows PowerShell:

		```powershell
		$env:ENV_FILE='.env'; docker compose up -d; Remove-Item Env:\ENV_FILE
		```

- To temporarily expose Adminer for debugging, uncomment the `ports` mapping under the `adminer` service in `docker-compose.yml` and restart the stack.
