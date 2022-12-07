https://pastebin.mozilla.org/JQUi3PNZ 
https://pastebin.mozilla.org/JQUi3PNZ
About History New snippet
JavaScript Expires in: 59 minutes
Delete Now
Raw
Slim
CREATE TYPE circuit.portal_users_role_enum AS ENUM
    ('ADMIN', 'USER', 'GUEST');

ALTER TYPE circuit.portal_users_role_enum
    OWNER TO elvys;

CREATE TYPE circuit.publishers_status_enum AS ENUM
    ('ACTIVE', 'INACTIVE', 'PENDING');

ALTER TYPE circuit.publishers_status_enum
    OWNER TO elvys;

CREATE TYPE circuit.products_status_enum AS ENUM
    ('APPROVED', 'DECLINED', 'AVAILABLE');

ALTER TYPE circuit.products_status_enum
    OWNER TO elvys;

CREATE TYPE circuit.links_status_enum AS ENUM
    ('APPROVED', 'DECLINED', 'AVAILABLE');

ALTER TYPE circuit.links_status_enum
    OWNER TO elvys;

CREATE TYPE circuit.links_type_enum AS ENUM
    ('OFFER', 'REFERRAL', 'REVIEW', 'TERMS');

ALTER TYPE circuit.links_type_enum
    OWNER TO elvys;

CREATE TYPE circuit.properties_status_enum AS ENUM
    ('APPROVED', 'DECLINED', 'AVAILABLE');

ALTER TYPE circuit.properties_status_enum
    OWNER TO elvys;

CREATE TYPE circuit.properties_type_enum AS ENUM
    ('WEB', 'APP', 'MARKETPLACE');

ALTER TYPE circuit.properties_type_enum
    OWNER TO elvys;

CREATE TABLE IF NOT EXISTS circuit.publishers
(
    id serial NOT NULL,
    status circuit.publishers_status_enum NOT NULL,
    owned_and_operated boolean NOT NULL,
    calculate_commission boolean NOT NULL,
    deleted boolean NOT NULL,
    parent_publisher_id character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),    
    CONSTRAINT publishers_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS circuit.publishers
    OWNER to elvys;

GRANT ALL ON TABLE circuit.publishers TO elvys;

CREATE TABLE IF NOT EXISTS circuit.portal_users
(
    id serial NOT NULL,
    publisher_id integer NOT NULL,
    role circuit.portal_users_role_enum NOT NULL,
    deleted boolean NOT NULL DEFAULT false,
    first_name character varying COLLATE pg_catalog."default" NOT NULL,
    last_name character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    auth_id character varying COLLATE pg_catalog."default" NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),    
    CONSTRAINT portal_users_pkey PRIMARY KEY (id),
    CONSTRAINT publishers_publisher_id_fk FOREIGN KEY (publisher_id)
        REFERENCES circuit.publishers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS circuit.portal_users
    OWNER to elvys;

GRANT ALL ON TABLE circuit.portal_users TO elvys;

CREATE TABLE IF NOT EXISTS circuit.product_sources
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    url character varying COLLATE pg_catalog."default" NOT NULL,
    deleted boolean NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_sources_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS circuit.product_sources
    OWNER to elvys;

GRANT ALL ON TABLE circuit.product_sources TO elvys;

CREATE TABLE IF NOT EXISTS circuit.product_types
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    deleted boolean NOT NULL DEFAULT false,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_types_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS circuit.product_types
    OWNER to elvys;

GRANT ALL ON TABLE circuit.product_types TO elvys;

CREATE TABLE IF NOT EXISTS circuit.products
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    status circuit.products_status_enum NOT NULL,
    deleted boolean NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),
    product_type_id integer,
    product_source_id integer,
    CONSTRAINT products_pkey PRIMARY KEY (id),
    CONSTRAINT product_type_product_type_id_fk FOREIGN KEY (product_type_id)
        REFERENCES circuit.product_types (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT product_source_product_source_id_fk FOREIGN KEY (product_source_id)
        REFERENCES circuit.product_sources (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS circuit.products
    OWNER to elvys;

GRANT ALL ON TABLE circuit.products TO elvys;

CREATE TABLE IF NOT EXISTS circuit.properties
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    status circuit.properties_status_enum NOT NULL,
    url character varying COLLATE pg_catalog."default" NOT NULL,
    type circuit.properties_type_enum NOT NULL,
    redirect_error_url character varying COLLATE pg_catalog."default" NOT NULL,
    deleted boolean NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),
    publisher_id integer,
    CONSTRAINT properties_pkey PRIMARY KEY (id),
    CONSTRAINT publishers_publisher_id_fk FOREIGN KEY (publisher_id)
        REFERENCES circuit.publishers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS circuit.properties
    OWNER to elvys;

GRANT ALL ON TABLE circuit.properties TO elvys;


CREATE TABLE circuit.properties_product_products (
	"propertiesId" SERIAL NOT NULL,
	"productsId" SERIAL NOT NULL,
	CONSTRAINT "PK_a297559cda83b8b21c72a5022b4" PRIMARY KEY ("propertiesId", "productsId")
);
CREATE INDEX "IDX_e71c63845e886f82d68d8b8972" ON circuit.properties_product_products USING btree ("productsId");
CREATE INDEX "IDX_efea53ae7163220e673210cc7e" ON circuit.properties_product_products USING btree ("propertiesId");


-- circuit.properties_product_products foreign keys

ALTER TABLE circuit.properties_product_products ADD CONSTRAINT "FK_e71c63845e886f82d68d8b89724" FOREIGN KEY ("productsId") REFERENCES circuit.products(id);
ALTER TABLE circuit.properties_product_products ADD CONSTRAINT "FK_efea53ae7163220e673210cc7e8" FOREIGN KEY ("propertiesId") REFERENCES circuit.properties(id) ON DELETE CASCADE ON UPDATE CASCADE;
Copy Snippet
Edit Snippet
 Wordwrap
CREATE TYPE circuit.portal_users_role_enum AS ENUM
    ('ADMIN', 'USER', 'GUEST');
​
ALTER TYPE circuit.portal_users_role_enum
    OWNER TO elvys;
​
CREATE TYPE circuit.publishers_status_enum AS ENUM
    ('ACTIVE', 'INACTIVE', 'PENDING');
​
ALTER TYPE circuit.publishers_status_enum
    OWNER TO elvys;
​
CREATE TYPE circuit.products_status_enum AS ENUM
    ('APPROVED', 'DECLINED', 'AVAILABLE');
​
ALTER TYPE circuit.products_status_enum
    OWNER TO elvys;
​
CREATE TYPE circuit.links_status_enum AS ENUM
    ('APPROVED', 'DECLINED', 'AVAILABLE');
​
ALTER TYPE circuit.links_status_enum
    OWNER TO elvys;
​
CREATE TYPE circuit.links_type_enum AS ENUM
    ('OFFER', 'REFERRAL', 'REVIEW', 'TERMS');
​
ALTER TYPE circuit.links_type_enum
    OWNER TO elvys;
​
CREATE TYPE circuit.properties_status_enum AS ENUM
    ('APPROVED', 'DECLINED', 'AVAILABLE');
​
ALTER TYPE circuit.properties_status_enum
    OWNER TO elvys;
​
CREATE TYPE circuit.properties_type_enum AS ENUM
    ('WEB', 'APP', 'MARKETPLACE');
​
ALTER TYPE circuit.properties_type_enum
    OWNER TO elvys;
​
CREATE TABLE IF NOT EXISTS circuit.publishers
(
    id serial NOT NULL,
    status circuit.publishers_status_enum NOT NULL,
    owned_and_operated boolean NOT NULL,
    calculate_commission boolean NOT NULL,
    deleted boolean NOT NULL,
    parent_publisher_id character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),    
    CONSTRAINT publishers_pkey PRIMARY KEY (id)
)
​
TABLESPACE pg_default;
​
ALTER TABLE IF EXISTS circuit.publishers
    OWNER to elvys;
​
GRANT ALL ON TABLE circuit.publishers TO elvys;
​
CREATE TABLE IF NOT EXISTS circuit.portal_users
(
    id serial NOT NULL,
    publisher_id integer NOT NULL,
    role circuit.portal_users_role_enum NOT NULL,
    deleted boolean NOT NULL DEFAULT false,
    first_name character varying COLLATE pg_catalog."default" NOT NULL,
    last_name character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    auth_id character varying COLLATE pg_catalog."default" NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),    
    CONSTRAINT portal_users_pkey PRIMARY KEY (id),
    CONSTRAINT publishers_publisher_id_fk FOREIGN KEY (publisher_id)
        REFERENCES circuit.publishers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
​
TABLESPACE pg_default;
​
ALTER TABLE IF EXISTS circuit.portal_users
    OWNER to elvys;
​
GRANT ALL ON TABLE circuit.portal_users TO elvys;
​
CREATE TABLE IF NOT EXISTS circuit.product_sources
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    url character varying COLLATE pg_catalog."default" NOT NULL,
    deleted boolean NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_sources_pkey PRIMARY KEY (id)
)
​
TABLESPACE pg_default;
​
ALTER TABLE IF EXISTS circuit.product_sources
    OWNER to elvys;
​
GRANT ALL ON TABLE circuit.product_sources TO elvys;
​
CREATE TABLE IF NOT EXISTS circuit.product_types
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    deleted boolean NOT NULL DEFAULT false,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_types_pkey PRIMARY KEY (id)
)
​
TABLESPACE pg_default;
​
ALTER TABLE IF EXISTS circuit.product_types
    OWNER to elvys;
​
GRANT ALL ON TABLE circuit.product_types TO elvys;
​
CREATE TABLE IF NOT EXISTS circuit.products
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    status circuit.products_status_enum NOT NULL,
    deleted boolean NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),
    product_type_id integer,
    product_source_id integer,
    CONSTRAINT products_pkey PRIMARY KEY (id),
    CONSTRAINT product_type_product_type_id_fk FOREIGN KEY (product_type_id)
        REFERENCES circuit.product_types (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT product_source_product_source_id_fk FOREIGN KEY (product_source_id)
        REFERENCES circuit.product_sources (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
​
TABLESPACE pg_default;
​
ALTER TABLE IF EXISTS circuit.products
    OWNER to elvys;
​
GRANT ALL ON TABLE circuit.products TO elvys;
​
CREATE TABLE IF NOT EXISTS circuit.properties
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    status circuit.properties_status_enum NOT NULL,
    url character varying COLLATE pg_catalog."default" NOT NULL,
    type circuit.properties_type_enum NOT NULL,
    redirect_error_url character varying COLLATE pg_catalog."default" NOT NULL,
    deleted boolean NOT NULL,
    created_date timestamp without time zone NOT NULL DEFAULT now(),
    updated_date timestamp without time zone NOT NULL DEFAULT now(),
    publisher_id integer,
    CONSTRAINT properties_pkey PRIMARY KEY (id),
    CONSTRAINT publishers_publisher_id_fk FOREIGN KEY (publisher_id)
        REFERENCES circuit.publishers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
​
TABLESPACE pg_default;
​
ALTER TABLE IF EXISTS circuit.properties
    OWNER to elvys;
​
GRANT ALL ON TABLE circuit.properties TO elvys;
​
​
CREATE TABLE circuit.properties_product_products (
	"propertiesId" SERIAL NOT NULL,
	"productsId" SERIAL NOT NULL,
	CONSTRAINT "PK_a297559cda83b8b21c72a5022b4" PRIMARY KEY ("propertiesId", "productsId")
);
CREATE INDEX "IDX_e71c63845e886f82d68d8b8972" ON circuit.properties_product_products USING btree ("productsId");
CREATE INDEX "IDX_efea53ae7163220e673210cc7e" ON circuit.properties_product_products USING btree ("propertiesId");
​
​
-- circuit.properties_product_products foreign keys
​
ALTER TABLE circuit.properties_product_products ADD CONSTRAINT "FK_e71c63845e886f82d68d8b89724" FOREIGN KEY ("productsId") REFERENCES circuit.products(id);
ALTER TABLE circuit.properties_product_products ADD CONSTRAINT "FK_efea53ae7163220e673210cc7e8" FOREIGN KEY ("propertiesId") REFERENCES circuit.properties(id) ON DELETE CASCADE ON UPDATE CASCADE;