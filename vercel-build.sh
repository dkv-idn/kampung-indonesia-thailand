#!/bin/bash
npx vite build
NITRO_PRESET=vercel npx nitro build
cp -r dist/client/* .vercel/output/static/
