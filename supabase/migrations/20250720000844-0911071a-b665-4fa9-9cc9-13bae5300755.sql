-- Clear all existing data from tables
-- Delete in order to respect any foreign key constraints

DELETE FROM public.emails;
DELETE FROM public.user_roles;
DELETE FROM public.profiles;