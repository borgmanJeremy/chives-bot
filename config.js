const config = { 
  "config":
  [
    { 
      "key": "!gnome41",
      "value":
"Gnome41 introduced a change that requires users to 'Share' their screen every time \
a user takes a screenshot. This is NOT something that can be fixed or changed within flameshot. \
There is an agreed upon fix in the xdg-desktop-portal code but someone needs to do the work.\n \
\n \
https://github.com/flatpak/xdg-desktop-portal/issues/649"
    },

    { "key": "!macpermission",
      "value": 
'MacOS requires users to re-give flameshot permission to take a screenshot after every update. \
[This article](https://flameshot.org/docs/guide/troubleshooting/#macos) walks through all the steps.'
    }, 

    { 
      "key": "!fractionalscaling",
      "value": 
'Flameshot sometimes behaves poorly when systems have fractional scaling set. Some users have reported \
that setting an environmental variable can help:\
```\
export QT_SCREEN_SCALE_FACTORS="1;1"\
```'
    },

    { "key": "!arewethereyet",
      "value": 
'Flameshot is maintained by volunteers who also lead busy personal lives. Asking "When will this be done"\
or saying "Id love to use flameshot if only it had this one feature..." is not helpful or productive.\
\n \
\n \
Consider fixing the problem yourself or posting a [bounty at rysolv](https://rysolv.com/issues)\
'
    }
  ]
};

module.exports = config;
