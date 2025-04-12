DROP TABLE IF EXISTS todos;

CREATE TABLE
    IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY,
        title TEXT,
        completed BOOLEAN DEFAULT false
    );

INSERT INTO
    todos (id, title)
VALUES
    (1, 'git init'),
    (2, 'git add .'),
    (3, 'git commit -m "init"'),
    (4, 'git push');