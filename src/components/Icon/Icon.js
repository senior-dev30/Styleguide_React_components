import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../';
import cx from 'classnames';

const ICONS = {
  MENU: (
    <g fill='none' fillRule='evenodd' transform='translate(5 11)'>
      <mask id='menu-m1' fill='#fff'>
        <path d='M0 25.333h38v-4.222H0v4.222zm0-10.555h38v-4.222H0v4.222zM0 0v4.222h38V0H0z' />
      </mask>
      <g fill='currentColor' mask='url(#menu-m1)'>
        <path d='M-3-6h44v37.333H-3z' />
      </g>
    </g>
  ),

  EXPAND_MORE: (
    <g fill='none' fillRule='evenodd' transform='translate(5 13)'>
      <mask id='EXPAND_MORE-b' fill='#fff'>
        <path d='M33.535 0L19 14.216 4.465 0 0 4.377 19 23 38 4.377z' />
      </mask>
      <g fill='currentColor' mask='url(#EXPAND_MORE-b)'>
        <path d='M-6-10h50v41H-6z' />
      </g>
    </g>
  ),

  BELL: (
    <g>
      <defs>
        <path
          id='BELL-a'
          d='M37.297 33.885c-4.506-1.989-4.677-10.529-4.68-10.744v-5.73c0-5.513-3.447-10.254-8.344-12.273C24.263 2.303 21.902 0 19 0c-2.901 0-5.263 2.303-5.273 5.138-4.897 2.019-8.343 6.76-8.343 12.274v5.729c-.003.215-.175 8.755-4.68 10.744a1.162 1.162 0 00-.677 1.312 1.19 1.19 0 001.169.923h11.422a6.52 6.52 0 001.775 3.38c1.237 1.26 2.873 1.955 4.607 1.955s3.37-.695 4.607-1.955a6.519 6.519 0 001.775-3.38h11.422a1.19 1.19 0 001.169-.923 1.162 1.162 0 00-.676-1.312zm-5.68-4.521c.466 1.52 1.127 3.047 2.065 4.318h-28.5c.937-1.27 1.598-2.798 2.065-4.318h24.37zM19 2.59c1.228 0 2.266.73 2.59 1.727A14.333 14.333 0 0019 4.083c-.887 0-1.754.081-2.59.235.324-.996 1.362-1.727 2.59-1.727zM8.276 23.388v-5.656c0-5.968 5.004-10.823 11.156-10.823 6.152 0 11.156 4.855 11.156 10.823v5.665c.002.174.03 1.996.503 4.24H7.773c.473-2.246.501-4.072.503-4.25zm11.156 15.476c-1.805 0-3.38-1.112-3.887-2.591h7.773c-.506 1.479-2.08 2.59-3.886 2.59z'
        />
      </defs>
      <g fill='none' fillRule='evenodd'>
        <path d='M0 0h48v48H0z' />
        <g transform='translate(5 3)'>
          <mask id='BELL-b' fill='#fff'>
            <use href='#BELL-a' />
          </mask>
          <g fill='currentColor' mask='url(#BELL-b)'>
            <path d='M-5-3h48v48H-5z' />
          </g>
        </g>
      </g>
    </g>
  ),

  NINE_BOXES: (
    <g>
      <defs>
        <path
          id='NINE_BOXES-a'
          d='M12.72 33.5a2 2 0 012 2V41a2 2 0 01-2 2H7a2 2 0 01-2-2v-5.5a2 2 0 012-2h5.72zm14.14 0a2 2 0 012 2V41a2 2 0 01-2 2h-5.72a2 2 0 01-2-2v-5.5a2 2 0 012-2h5.72zm14.14 0a2 2 0 012 2V41a2 2 0 01-2 2h-5.72a2 2 0 01-2-2v-5.5a2 2 0 012-2H41zM12.72 19.25a2 2 0 012 2v5.5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5.5a2 2 0 012-2h5.72zm14.14 0a2 2 0 012 2v5.5a2 2 0 01-2 2h-5.72a2 2 0 01-2-2v-5.5a2 2 0 012-2h5.72zm14.14 0a2 2 0 012 2v5.5a2 2 0 01-2 2h-5.72a2 2 0 01-2-2v-5.5a2 2 0 012-2H41zM12.72 5a2 2 0 012 2v5.5a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h5.72zm14.14 0a2 2 0 012 2v5.5a2 2 0 01-2 2h-5.72a2 2 0 01-2-2V7a2 2 0 012-2h5.72zM41 5a2 2 0 012 2v5.5a2 2 0 01-2 2h-5.72a2 2 0 01-2-2V7a2 2 0 012-2H41z'
        />
      </defs>
      <g fill='none' fillRule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <mask id='NINE_BOXES-b' fill='#fff'>
          <use href='#NINE_BOXES-a' />
        </mask>
        <use fill='#80868B' href='#NINE_BOXES-a' />
        <g fill='currentColor' mask='url(#NINE_BOXES-b)'>
          <path d='M0 0h48v48H0z' />
        </g>
      </g>
    </g>
  ),

  EDIT: (
    <g>
      <defs>
        <path
          id='EDIT-a'
          d='M19 0C8.507 0 0 8.507 0 19s8.507 19 19 19 19-8.507 19-19S29.493 0 19 0zm-7.917 26.917l1.593-6.39 4.918 4.916-6.51 1.474zm8.17-2.975l-5.07-5.07 9.25-9.372 5.068 5.067-9.247 9.375z'
        />
      </defs>
      <g fill='none' fillRule='evenodd'>
        <path d='M0 0h48v48H0z' />
        <g transform='translate(5 5)'>
          <mask id='EDIT-b' fill='#fff'>
            <use href='#EDIT-a' />
          </mask>
          <use fill='#80868B' fillRule='nonzero' href='#EDIT-a' />
          <g fill='currentColor' mask='url(#EDIT-b)'>
            <path d='M-3.8-3.8h45.6v45.6H-3.8z' />
          </g>
        </g>
      </g>
    </g>
  ),

  CHECK_MARK: (
    <g>
      <mask id='checkmark-a' maskUnits='userSpaceOnUse' x='5' y='9' width='38' height='31'>
        <path
          d='M20.2 37.91a3.49 3.49 0 01-5.067 0l-9.085-9.422c-1.397-1.453-1.397-3.806 0-5.26a3.494 3.494 0 015.066 0l6.552 6.799L36.884 10.09a3.487 3.487 0 015.065 0c1.401 1.45 1.401 3.802 0 5.255L20.2 37.91z'
          fill='#fff'
        />
      </mask>
      <g mask='url(#checkmark-a)'>
        <path
          d='M20.2 37.91a3.49 3.49 0 01-5.067 0l-9.085-9.422c-1.397-1.453-1.397-3.806 0-5.26a3.494 3.494 0 015.066 0l6.552 6.799L36.884 10.09a3.487 3.487 0 015.065 0c1.401 1.45 1.401 3.802 0 5.255L20.2 37.91z'
          fill='currentColor'
        />
        <path fillRule='evenodd' clipRule='evenodd' d='M0 7h48v48H0V7z' fill='currentColor' />
      </g>
    </g>
  ),

  CLOSE: (
    <g fill='none' fillRule='evenodd' transform='translate(5 5)'>
      <mask id='close-m1' fill='#fff'>
        <path d='M38 3.827L34.173 0 19 15.173 3.827 0 0 3.827 15.173 19 0 34.173 3.827 38 19 22.827 34.173 38 38 34.173 22.827 19z' />
      </mask>
      <g fill='currentColor' mask='url(#close-m1)'>
        <path d='M-5-5h48v48H-5z' />
      </g>
    </g>
  ),

  MINUS_CIRCLE: (
    <g>
      <defs>
        <path
          id='MINUS_CIRCLE-a'
          d='M20 0c11.04 0 20 8.96 20 20s-8.96 20-20 20S0 31.04 0 20 8.96 0 20 0zm0 5C11.716 5 5 11.716 5 20c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm10 13v4H10v-4h20z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(4 4)'>
          <mask id='MINUS_CIRCLE-b' fill='#fff'>
            <use href='#MINUS_CIRCLE-a' />
          </mask>
          <use fill='#80868B' href='#MINUS_CIRCLE-a' />
          <g fill='currentColor' mask='url(#MINUS_CIRCLE-b)'>
            <path d='M-4-5h48v48H-4z' />
          </g>
        </g>
      </g>
    </g>
  ),

  PLUS_CIRCLE_SOLID: (
    <svg>
      <defs>
        <path
          id='PLUS_CIRCLE_SOLID-a'
          d='M20 0C8.96 0 0 8.96 0 20s8.96 20 20 20 20-8.96 20-20S31.04 0 20 0zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(4 4)'>
          <mask id='PLUS_CIRCLE_SOLID-b' fill='#fff'>
            <use href='#PLUS_CIRCLE_SOLID-a' />
          </mask>
          <use fill='#80868B' href='#PLUS_CIRCLE_SOLID-a' />
          <g fill='currentColor' mask='url(#PLUS_CIRCLE_SOLID-b)'>
            <path d='M-4-4h48v48H-4z' />
          </g>
        </g>
      </g>
    </svg>
  ),

  PLUS_CIRCLE: (
    <g>
      <defs>
        <path
          id='PLUS_CIRCLE-a'
          d='M20 0c11.04 0 20 8.96 20 20s-8.96 20-20 20S0 31.04 0 20 8.96 0 20 0zm0 5C11.716 5 5 11.716 5 20c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm2 5v8h8v4h-8v8h-4v-8h-8v-4h8v-8h4z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path d='M0 0h48v48H0z' />
        <g transform='translate(4 4)'>
          <mask id='PLUS_CIRCLE-b' fill='#fff'>
            <use href='#PLUS_CIRCLE-a' />
          </mask>
          <use fill='#80868B' href='#PLUS_CIRCLE-a' />
          <g fill='currentColor' mask='url(#PLUS_CIRCLE-b)'>
            <path d='M-4-4h48v48H-4z' />
          </g>
        </g>
      </g>
    </g>
  ),

  TRANGLE_RIGHT: (
    <g>
      <defs>
        <path id='TRANGLE_RIGHT-a' d='M12.667 6.333l19 25.334h-38z' />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path d='M0 0h48v48H0z' />
        <g transform='translate(11 5)'>
          <mask id='TRANGLE_RIGHT-b' fill='#fff'>
            <use href='#TRANGLE_RIGHT-a' />
          </mask>
          <use fill='#80868B' transform='rotate(90 12.667 19)' href='#TRANGLE_RIGHT-a' />
          <g fill='currentColor' mask='url(#TRANGLE_RIGHT-b)' transform='rotate(90 12.667 19)'>
            <path d='M-6-3h37.333v44H-6z' />
          </g>
        </g>
      </g>
    </g>
  ),

  ARROW_FORWARD_IOS: (
    <g>
      <defs>
        <path id='ARROW_FORWARD_IOS-a' d='M0 4.028L14.57 19 0 33.972 3.92 38l18.49-19L3.92 0z' />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path d='M0 0h48v48H0z' />
        <g transform='translate(13 5)'>
          <mask id='ARROW_FORWARD_IOS-b' fill='#fff'>
            <use href='#ARROW_FORWARD_IOS-a' />
          </mask>
          <g fill='currentColor' mask='url(#ARROW_FORWARD_IOS-b)'>
            <path d='M-7-2h36.41v42H-7z' />
          </g>
        </g>
      </g>
    </g>
  ),

  VISIBILITY: (
    <g>
      <defs>
        <path
          id='VISIBILITY-a'
          d='M19 0C10.364 0 2.988 5.39 0 13c2.988 7.61 10.364 13 19 13s16.012-5.39 19-13C35.012 5.39 27.636 0 19 0zm0 21.667c-4.767 0-8.636-3.883-8.636-8.667S14.233 4.333 19 4.333c4.767 0 8.636 3.883 8.636 8.667S23.767 21.667 19 21.667zM19 7.8a5.184 5.184 0 00-5.182 5.2c0 2.877 2.315 5.2 5.182 5.2a5.184 5.184 0 005.182-5.2c0-2.877-2.315-5.2-5.182-5.2z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path d='M0 0h48v48H0z' />
        <g transform='translate(5 11)'>
          <mask id='VISIBILITY-b' fill='#fff'>
            <use href='#VISIBILITY-a' />
          </mask>
          <g fill='currentColor' mask='url(#VISIBILITY-b)'>
            <path d='M-6-9h48v48H-6z' />
          </g>
        </g>
      </g>
    </g>
  ),

  ARCHIVE: (
    <g>
      <defs>
        <path
          id='ARCHIVE-a'
          d='M10.858 14.167l-5.276 5.63h4.284c.195 0 .373.1.458.264l1.56 4.145h14.207l1.56-4.145a.538.538 0 01.459-.264h4.29l-5.258-5.63h3.562l6.056 5.01c.899.565 1.357 1.704 1.213 2.879l-.738 6.095C37.04 29.308 36.473 30 34.853 30H3.148c-1.56 0-2.188-.656-2.383-1.85l-.738-6.094c-.144-1.148.297-2.314 1.196-2.879l6.056-5.01h3.579zM23.948 0v8.692h6.927L19.792 19.167 8.708 8.692h6.893V0h8.347z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(5 9)'>
          <mask id='ARCHIVE-b' fill='#fff'>
            <use href='#ARCHIVE-a' />
          </mask>
          <use fill='#80868B' fill-rule='nonzero' href='#ARCHIVE-a' />
          <g fill='currentColor' mask='url(#ARCHIVE-b)'>
            <path d='M-5-9h48v48H-5z' />
          </g>
        </g>
      </g>
    </g>
  ),

  PAPERPLANCE: (
    <g>
      <defs>
        <path
          id='PAPERPLANCE-a'
          d='M36.392.008a1.449 1.449 0 00-.548.183L.745 19.203c-.508.28-.8.84-.737 1.417a1.443 1.443 0 001.012 1.234l9.323 2.787c.217 1.726 1.188 9.192 1.37 10.649.184 1.451 1.166 1.702 2.149.366.662-.903 4.57-6.399 4.57-6.399l8.317 8.318a1.448 1.448 0 002.423-.64l8.774-35.099A1.447 1.447 0 0036.392.008zm-2.35 3.95L26.638 33.25l-8.323-8.233L30.41 8.416 11.602 21.697 4.75 19.696 34.042 3.958z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(5 5)'>
          <mask id='PAPERPLANCE-b' fill='#fff'>
            <use href='#PAPERPLANCE-a' />
          </mask>
          <use fill='#80868B' fill-rule='nonzero' href='#PAPERPLANCE-a' />
          <g fill='currentColor' mask='url(#PAPERPLANCE-b)'>
            <path d='M-5-5h48v48H-5z' />
          </g>
        </g>
      </g>
    </g>
  ),

  FOUR_BOXES: (
    <g>
      <defs>
        <path
          id='FOUR_BOXES-a'
          d='M40.388 43H28.196a2.616 2.616 0 01-2.613-2.612V28.196a2.616 2.616 0 012.613-2.613h12.192A2.616 2.616 0 0143 28.196v12.192A2.616 2.616 0 0140.388 43zm0-20.583H28.196a2.616 2.616 0 01-2.613-2.613V7.613A2.616 2.616 0 0128.196 5h12.192A2.616 2.616 0 0143 7.612v12.192a2.616 2.616 0 01-2.612 2.613zM19.804 43H7.613A2.616 2.616 0 015 40.388V28.196a2.616 2.616 0 012.612-2.613h12.192a2.616 2.616 0 012.613 2.613v12.192A2.616 2.616 0 0119.804 43zm0-20.583H7.613A2.616 2.616 0 015 19.804V7.613A2.616 2.616 0 017.612 5h12.192a2.616 2.616 0 012.613 2.612v12.192a2.616 2.616 0 01-2.613 2.613z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <mask id='FOUR_BOXES-b' fill='#fff'>
          <use href='#FOUR_BOXES-a' />
        </mask>
        <use fill='#80868B' fill-rule='nonzero' href='#FOUR_BOXES-a' />
        <g fill='currentColor' mask='url(#FOUR_BOXES-b)'>
          <path d='M0 0h48v48H0z' />
        </g>
      </g>
    </g>
  ),

  PAPERCLIP: (
    <g>
      <defs>
        <path
          id='PAPERCLIP-a'
          d='M30.914.01c-1.74.092-3.474.922-4.83 2.356l-.085.093c-.003.004-.025-.004-.028 0-.039.05-.078.1-.113.155-.039.05-.078.1-.113.155L8.74 21.528c-.04.05-.078.1-.113.155-1.6 1.903-1.568 4.915.113 6.76 1.723 1.895 4.604 1.895 6.327 0 .085-.094.16-.198.226-.31.081-.066.156-.14.226-.218l12.74-13.798c.568-.589.727-1.515.392-2.29-.336-.775-1.084-1.229-1.861-1.12a1.75 1.75 0 00-1.073.589l-12.74 13.798c-.053.07-.099.14-.141.217-.018.011-.04.02-.057.03-.01.02-.017.043-.028.063a1.562 1.562 0 00-.254.217c-.343.376-.844.38-1.187 0a.95.95 0 010-1.302L28.57 5.28c.038-.05.077-.101.113-.155 1.486-1.504 3.47-1.493 4.576-.28.077.082.162.156.254.218l.028.03c.053.078.11.152.17.218 1.034 1.135.861 3.53-.593 5.209-.029.03-.057.062-.085.093l-18.7 21.053c-.06.047-.117.101-.17.155-2.425 2.663-6.603 2.985-8.926.434-2.277-2.5-2.04-7.023.283-9.705a2.25 2.25 0 00.113-.124L21.028 5.715c.568-.59.727-1.516.391-2.291-.335-.775-1.084-1.229-1.86-1.12a1.75 1.75 0 00-1.074.59L3.175 19.512l-.085.093c-.039.05-.077.1-.113.155-3.658 4.162-4.156 11.069-.31 15.286 3.816 4.19 10.073 3.744 13.87-.217a3.18 3.18 0 00.112-.093l.028-.031.057-.062v-.031l.113-.124c.039-.05.078-.101.113-.155l18.672-20.93a1.93 1.93 0 00.339-.465c2.383-2.992 2.902-7.542.282-10.418a2.247 2.247 0 00-.141-.124 2.162 2.162 0 00-.283-.372A6.123 6.123 0 0030.914.009z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(5 5)'>
          <mask id='PAPERCLIP-b' fill='#fff'>
            <use href='#PAPERCLIP-a' />
          </mask>
          <use fill='#80868B' fill-rule='nonzero' href='#PAPERCLIP-a' />
          <g fill='currentColor' mask='url(#PAPERCLIP-b)'>
            <path d='M-5-5h48v48H-5z' />
          </g>
        </g>
      </g>
    </g>
  ),

  STAR: (
    <g>
      <defs>
        <path
          id='STAR-a'
          d='M38 13.718l-13.661-1.175L19 0l-5.339 12.562L0 13.718l10.374 8.962L7.258 36 19 28.933 30.742 36l-3.097-13.32L38 13.718zM19 25.389l-7.144 4.302 1.9-8.11-6.308-5.457 8.322-.72L19 7.768l3.249 7.655 8.322.72-6.308 5.457 1.9 8.11L19 25.39z'
        />
      </defs>
      <g fill='none' fillRule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(5 6)'>
          <mask id='STAR-b' fill='#fff'>
            <use href='#STAR-a' />
          </mask>
          <g fill='currentColor' mask='url(#STAR-b)'>
            <path d='M-2-2h42v41H-2z' />
          </g>
        </g>
      </g>
    </g>
  ),

  STAR_SOLID: (
    <g>
      <defs>
        <path
          id='STAR_SOLID-a'
          d='M19 29.267l11.742 7.15-3.116-13.475L38 13.877l-13.661-1.17L19 0l-5.339 12.707L0 13.877l10.374 9.065-3.116 13.475z'
        />
      </defs>
      <g fill='none' fillRule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(5 6)'>
          <mask id='STAR_SOLID-b' fill='#fff'>
            <use href='#STAR_SOLID-a' />
          </mask>
          <g fill='currentColor' mask='url(#STAR_SOLID-b)'>
            <path d='M-2-2h42v41.417H-2z' />
          </g>
        </g>
      </g>
    </g>
  ),

  ADD: (
    <g fill='none' fillRule='evenodd' transform='translate(5 5)'>
      <mask id='add-m1' fill='#fff'>
        <path d='M38 21.714H21.714V38h-5.428V21.714H0v-5.428h16.286V0h5.428v16.286H38z' />
      </mask>
      <g fill='currentColor' mask='url(#add-m1)'>
        <path d='M-5-5h48v48H-5z' />
      </g>
    </g>
  ),

  SEARCH: (
    <g>
      <defs>
        <path
          id='SEARCH-a'
          d='M27.158 23.9h-1.716l-.608-.587a14.06 14.06 0 003.41-9.19C28.245 6.322 21.923 0 14.123 0S0 6.322 0 14.122s6.322 14.123 14.122 14.123a14.06 14.06 0 009.19-3.411l.587.608v1.716L34.763 38 38 34.763 27.158 23.899zm-13.036 0a9.764 9.764 0 01-9.777-9.778 9.764 9.764 0 019.777-9.777 9.764 9.764 0 019.777 9.777 9.764 9.764 0 01-9.777 9.777z'
        />
      </defs>
      <g fill='none' fillRule='evenodd' transform='translate(5 5)'>
        <mask id='SEARCH-b' fill='#fff'>
          <use href='#SEARCH-a' />
        </mask>
        <g fill='currentColor' mask='url(#SEARCH-b)'>
          <path d='M-3-3h45v45H-3z' />
        </g>
      </g>
    </g>
  ),

  ARROW_FORWARD: (
    <g>
      <defs>
        <path
          id='ARROW_FORWARD-a'
          d='M19 0l-3.349 3.349 13.253 13.276H0v4.75h28.904L15.65 34.651 19 38l19-19z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(5 5)'>
          <mask id='ARROW_FORWARD-b' fill='#fff'>
            <use href='#ARROW_FORWARD-a' />
          </mask>
          <g fill='currentColor' mask='url(#ARROW_FORWARD-b)'>
            <path d='M-4-4h46v46H-4z' />
          </g>
        </g>
      </g>
    </g>
  ),

  INFO: (
    <g>
      <defs>
        <path
          id='INFO-a'
          d='M20.161.866c11.025 0 19.973 8.948 19.973 19.973 0 11.025-8.948 19.973-19.973 19.973C9.136 40.812.188 31.864.188 20.84.188 9.814 9.136.866 20.16.866zm1.277 15.978h-2.553c-.2 0-.37.059-.511.175a.561.561 0 00-.202.357l-.008.114v12.69c0 .18.07.332.21.457.112.1.243.16.394.181l.117.008h2.553c.2 0 .37-.063.51-.189.112-.1.18-.218.202-.352l.008-.105V17.49a.59.59 0 00-.21-.457.72.72 0 00-.394-.181l-.116-.008zm.012-5.992h-2.606a.675.675 0 00-.672.596l-.008.122v2.094a.67.67 0 00.198.488c.106.107.23.17.372.192l.11.008h2.606a.7.7 0 00.496-.2.647.647 0 00.204-.377l.008-.111V11.57a.704.704 0 00-.198-.517.66.66 0 00-.39-.193l-.12-.008z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(4 4)'>
          <mask id='INFO-b' fill='#fff'>
            <use href='#INFO-a' />
          </mask>
          <use fill='#80868B' href='#INFO-a' />
          <g fill='currentColor' mask='url(#INFO-b)'>
            <path d='M-4-3h48v48H-4z' />
          </g>
        </g>
      </g>
    </g>
  ),

  VISIBILITY_OFF: (
    <g>
      <defs>
        <path
          id='VISIBILITY_OFF-a'
          d='M19 6.947c4.767 0 8.636 3.89 8.636 8.685a8.47 8.47 0 01-.621 3.178l5.043 5.072a20.52 20.52 0 005.925-8.25c-2.988-7.625-10.364-13.027-19-13.027a20.01 20.01 0 00-6.875 1.216l3.731 3.752A8.343 8.343 0 0119 6.947zM1.727 2.206l3.938 3.96.795.799A20.492 20.492 0 000 15.632c2.988 7.624 10.364 13.026 19 13.026 2.677 0 5.234-.521 7.565-1.46l.726.73L32.35 33l2.194-2.206L3.921 0 1.727 2.206zm9.552 9.605l2.677 2.692a4.926 4.926 0 00-.138 1.129c0 2.883 2.315 5.21 5.182 5.21.38 0 .76-.052 1.123-.139l2.677 2.692c-1.157.573-2.435.92-3.8.92-4.767 0-8.636-3.89-8.636-8.683 0-1.373.345-2.658.915-3.821zm7.445-1.355l5.44 5.47.035-.277c0-2.883-2.314-5.21-5.182-5.21l-.293.017z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <path fill='none' d='M0 0h48v48H0z' />
        <g transform='translate(5 8.4)'>
          <mask id='VISIBILITY_OFF-b' fill='#fff'>
            <use href='#VISIBILITY_OFF-a' />
          </mask>
          <g fill='currentColor' mask='url(#VISIBILITY_OFF-b)'>
            <path d='M-4.59-8.474h48v48h-48z' />
          </g>
        </g>
      </g>
    </g>
  ),

  ARROW_LONG: (
    <g>
      <defs>
        <path
          id='ARROW_LONG-a'
          d='M29.654.732l7.81 7.81a1.6 1.6 0 0 1 0 2.264l-7.81 7.81a1.475 1.475 0 0 1-2.086-2.086l5.28-5.281H1.5a1.5 1.5 0 0 1 0-3h31.498l-5.43-5.431A1.475 1.475 0 0 1 29.654.732z'
        />
      </defs>
      <g fill='none' fill-rule='evenodd' transform='translate(5 14)'>
        <mask id='ARROW_LONG-b' fill='#fff'>
          <use href='#ARROW_LONG-a' />
        </mask>
        <g fill='currentColor' mask='url(#ARROW_LONG-b)'>
          <path d='M-5-14h48v48H-5z' />
        </g>
      </g>
    </g>
  ),

  WARNING: (
    <path d='M6.345 41h35.31a1.25 1.25 0 0 0 1.081-1.878L25.081 8.742a1.25 1.25 0 0 0-2.162 0L5.264 39.122A1.25 1.25 0 0 0 6.345 41zm18.958-5.387h-2.605a.5.5 0 0 1-.5-.5v-2.591a.5.5 0 0 1 .5-.5h2.605a.5.5 0 0 1 .5.5v2.591a.5.5 0 0 1-.5.5zm-.5-6.285h-1.605a1 1 0 0 1-1-1v-9.672a1 1 0 0 1 1-1h1.605a1 1 0 0 1 1 1v9.672a1 1 0 0 1-1 1z' />
  ),

  LOCATION: (
    <path d='M24,4 C16.28,4 10,10.28 10,18 C10,28.5 24,44 24,44 C24,44 38,28.5 38,18 C38,10.28 31.72,4 24,4 Z M32,20 L26,20 L26,26 L22,26 L22,20 L16,20 L16,16 L22,16 L22,10 L26,10 L26,16 L32,16 L32,20 Z' />
  ),

  VIDEO_CAMERA: (
    <path d='M34,21 L34,14 C34,12.9 33.1,12 32,12 L8,12 C6.9,12 6,12.9 6,14 L6,34 C6,35.1 6.9,36 8,36 L32,36 C33.1,36 34,35.1 34,34 L34,27 L42,35 L42,13 L34,21 Z' />
  ),
};

const Icon = ({ icon, size, width, height, style, color, className, viewBox, ...props }) => {
  let _style = {
    fill: 'currentcolor',
    verticalAlign: 'middle',
    width: width || size,
    height: height || size,
    ...style,
  };

  return (
    <Box
      as='svg'
      color={color}
      viewBox={viewBox}
      preserveAspectRatio='xMidYMid meet'
      className={cx('agreed-icon', className)}
      style={_style}
      fit='true'
      {...props}
    >
      {ICONS[icon]}
    </Box>
  );
};

Icon.displayName = 'Icon';

Icon.propTypes = {
  /**
   * icon name
   */
  icon: PropTypes.oneOf(Object.keys(ICONS)),

  /**
   * To set width and height of icon
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * To set width of icon, width prop superseeds size
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * To set height of icon, height prop superseeds size
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * set the color of icon
   */
  color: PropTypes.string,

  /**
   * icon svg style
   */
  style: PropTypes.object,
};

Icon.defaultProps = {
  icon: 'ADD',
  size: 32,
  viewBox: '0 0 48 48',
  style: {},
  color: 'primary',
};

export { ICONS };

export default Icon;
