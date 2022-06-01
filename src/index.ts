import { https } from 'firebase-functions'

import Hello from '@routes/Hello'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const hello = https.onRequest(Hello)
