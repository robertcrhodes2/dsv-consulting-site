-- DSV Consulting – Supabase Schema
-- Run this in the Supabase SQL Editor

-- Portfolio Items
create table if not exists portfolio_items (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  name text not null,
  location text,
  years text,
  description text,
  tags text[] default '{}',
  current boolean default false,
  website text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Press Releases
create table if not exists press_releases (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  date text,
  distributed boolean default false,
  linkedin_post_id text,
  x_post_id text,
  created_at timestamptz default now()
);

-- Clients (for investor materials)
create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  active boolean default true,
  created_at timestamptz default now()
);

-- Documents (fact sheets, offering docs, etc.)
create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete cascade,
  name text not null,
  type text, -- 'fact_sheet', 'offering', 'financials', 'other'
  storage_path text not null,
  is_public boolean default false,
  created_at timestamptz default now()
);

-- Investors
create table if not exists investors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  client_id uuid references clients(id),
  status text default 'invited', -- invited, nda_sent, nda_signed, materials_sent
  access_token text unique,
  created_at timestamptz default now()
);

-- NDA Requests
create table if not exists nda_requests (
  id uuid primary key default gen_random_uuid(),
  investor_id uuid references investors(id) on delete cascade,
  client_id uuid references clients(id),
  envelope_id text, -- DocuSign envelope ID
  status text default 'sent', -- sent, completed, declined
  signed_at timestamptz,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table portfolio_items enable row level security;
alter table press_releases enable row level security;
alter table clients enable row level security;
alter table documents enable row level security;
alter table investors enable row level security;
alter table nda_requests enable row level security;

-- Public read for portfolio and press
create policy "Public can read portfolio" on portfolio_items for select using (true);
create policy "Public can read press" on press_releases for select using (true);

-- Admin full access (use service role or authenticated admin role in production)
create policy "Authenticated full access portfolio" on portfolio_items for all using (auth.role() = 'authenticated');
create policy "Authenticated full access press" on press_releases for all using (auth.role() = 'authenticated');
create policy "Authenticated full access clients" on clients for all using (auth.role() = 'authenticated');
create policy "Authenticated full access documents" on documents for all using (auth.role() = 'authenticated');
create policy "Authenticated full access investors" on investors for all using (auth.role() = 'authenticated');
create policy "Authenticated full access nda" on nda_requests for all using (auth.role() = 'authenticated');

-- Storage bucket for documents (create via dashboard or API)
-- insert into storage.buckets (id, name, public) values ('investor-docs', 'investor-docs', false);
