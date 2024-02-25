CREATE SEQUENCE torisans_id_seq AS integer;

CREATE TABLE torisan (
    id int NOT NULL DEFAULT nextval('torisans_id_seq'::regclass) PRIMARY KEY,
    user_id uuid REFERENCES auth.users NOT NULL,
    name character varying(50) NOT NULL,
    nickname character varying(50) NOT NULL,
    birth_date date NOT NULL,
    specie_type int NOT NULL,
    stage_type int NOT NULL,
    gender_type int NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX torisan_user_id_idx
ON torisan
USING btree (user_id);

ALTER TABLE torisan ENABLE ROW LEVEL SECURITY;

CREATE POLICY "User can see their own torisan only."
ON torisan FOR SELECT
USING ( auth.uid() = user_id );

CREATE POLICY "User can update their own torisan only."
ON torisan FOR UPDATE
USING ( auth.uid() = user_id );