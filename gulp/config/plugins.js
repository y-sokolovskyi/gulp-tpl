import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import ifPlugin from 'gulp-if';
import minify from 'gulp-minify';

export const plugins = {
  replace,
  plumber,
  notify,
  browserSync,
  if: ifPlugin,
  minify
};
