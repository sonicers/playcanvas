pc.script.create( "ui", function (context) {

    var colors = [
        {
            image: "burningred",
            name: "Burning Red",
            color: new pc.Color(176.0/255.0, 7.0/255.0, 4.0/255.0),
            data: 'data:image/jpeg;base64,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'
        },
        {
            image: "chillired",
            name: "Chilli Red",
            color: new pc.Color(204.0/255.0, 17.0/255.0, 10.0/255.0),
            data: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAJAAkAwERAAIRAQMRAf/EALUAAAMBAAMAAAAAAAAAAAAAAAIICQEDBAoBAAIDAQEBAAAAAAAAAAAAAAYHBQgJBAEKEAAAAwQGBwMGDwAAAAAAAAABAgMAEhMEERQFFQYIITEWBxcYGVEjZkEkpigJKWGBscHxIoJDk2RGh7doeBEAAAMFBAMJDAcJAAAAAAAAARECABIDBAUhExQVMQYXQVFhgZEiMhYHcVJigiNDo7NEJxgZoUKyk8MkZJSkxEVlJmYIKf/aAAwDAQACEQMRAD8ART2hG+LePvgzgZh7Q3gYstvEKeHd8m8nCOFrMn7Rml7JwvhbCuMLasKwLBsCzlFTSlmSMhZskQogkQorKidZQTqqKHNRvXqo1Co60TsWciriAiaioQAiLqEIWpKUpDQAAAbmkTEbRER+m7/WLVHVPVDsT1ak9XZKXllzVEkpiYWhCQiR5iYloUWNFjLAHoilRFD0hF1IJQkkJSkEtAWHZeYEBZvValpWkRJjAzE0nNaGUFeohmJN3JKem7PmUJ2QmpiSnJZQq0vNSqp0F0VSCBiKJqpmKchymDQIDSxRKTACFrJqs0lUMRIOLSA8AgNggO6A2C3oN54cw/SwuriJiO/uJPDnbW9p7a3Yq771ue/o95UQ/M4sSJUu6e8rNXPKjs5xN8vE31y+YvuP98Zm7zT0lytRTZjqd8ZWT5fL5PluYYZxOHxGGeO6J1298s4Tt5aTvNaNWboPWuzO+T1hd9Oj9yMSshda5Y6/PCG7NxvWKbULsJqwJ7KdWIZ9HV+nByScFl3ooYMWhUNRg1iJePDm4TqtLaA/G3dLTIhusN1ikgsBEAYwMxPJzWi1k5XqINtm+1Vng6Zr/wDYDt8NdrNS+91L5+3F6RqN4Ifjxwv+LfwrJfm6L612Z3/Q2+n+SMSsE6zyx1mcEvaovrFNZLsUrF32b6uwz6NEkA5JWEDLuIfQwHNy1otZ2iVgFABiw6mhxBUJR7jHyFw52EQk8TaAg0nKzIgVrB9ZpIKAbGqe+HTHp0Ucwjvo58rOO+9zl7/UPxGzzwP/AESwxW9Uz/dGUXOLITdm5t80MlPyy8nNoZhd8wKy8ymdFUj+8XESiYmIcAF1RI5TFHUYogICICDeaxSw5tNgoCHERPti3f2QVlCuz+gqhLBUPKJMAEBMLJeGA8ggQ7w2Cy2iVgaclWsrQa50bWEQFhealhARZy0WrgsAtYdTRYCqErgY0UmHOwj+sTVSqM90va1U5ir8wceNBPCgXPUor1Drla7unU/oZ0FG2G3zqncc8fg3zr3cesPQbZxX0h8zXL72Hf8AVa5deA77AX12Xf3XlHdLtrXj9of0jOOFo8xVx8bqtI7ZbIVu+aKojdu2Fydze92QYda86qsL7txn3Wep+KHOMPiyAzN7RY87waDtLgbLXs4+IrIEbO816uvqu3bu6Mxeur+x155675r7x842QH3FPiT0j7fgYfi7L/OYb0jNqU+N/wBkzk9wsE3GPQmpCnaXX4l+bTraPibH/OYTjvWKZP5hJBg8/LgwLGl0KIqcPaSI+V17aN16kHaX/qUU9uhuFexHzmB4736dwu7ZvsRy/wAy0vy3WXQPRwB+KVp7xWnotaxPu5uSj9O8vkT8tFr0D8J+B9mhml/b+Q+y9WrjwMPcl924XE1HfevtQ/nu2HNP1Ga5g/8AtOJvPHNv/9k='
        },
        {
            image: "cirruswhite",
            name: "Cirrus White",
            color: new pc.Color(255.0/255.0, 255.0/255.0, 255.0/255.0),
            data: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAJAAkAwERAAIRAQMRAf/EAIUAAAICAwEAAAAAAAAAAAAAAAYHBQgCBAkKAQEAAAAAAAAAAAAAAAAAAAAAEAAAAgcEBQcHDQAAAAAAAAABAgAREgMTFAUhMQQXQSIVFhjwUWFxMiM4gZGhsUIkKMHhYsM0hCVlRpYHJ4gRAQABBAMAAAAAAAAAAAAAAABBAREhMWGBsf/aAAwDAQACEQMRAD8A96dLwVMe4DDEHB4UwwHZhM8cuzvDHOQDGMc5iiYREw36OpA0ahQsFaJcHhg6nDoPURAXlVorkrbLh0CljY7KFnmQF7jsELh6BiELYICICUBKYF9kwCChAVICRzLrG++XDb+Vze3Rn4xpzY+XWYcrFXEZje6NNNwdLVqDHa8lCqASuGBdzl0F9vYKgGhDO8S7VYtVg8rhBAHKlTgM1qrvX86AtqrTLR1bjKu6UCi0L4joNviHUr/NzXIUC8NDqanTgGr3TvTzEBAZ1LqACUutb1/IgE4gTEu1h2laNNiAKVKmraFla1oHOiB8UkBQeIq7p4Z2kCx1JqIlI51vZIoedQAgM2k1O4GuYQt86AyKbjymKXWvANPK5AnnrsmIdiYL1W6fL0h6kDmVFw/Fk3HcwOJKTjRCQprhskJaItiPPdyytqLqqasR4WpuWX8mb57wv8s805SKee3Yyi2PONDFk8z/AHyE2v7N3C7rUAPwvEwsJXPRfs+Ef6xAJsLxdqCVz0Uuzwc+iJ0oEs94z5PERc/5OCeYkOD2dhMi3K7L/FI7K2Zfvl9m1AAf6LyI/Xm0d/vzfOrOvbv7izD3l+8zX0kEcP/Z'
        },
        {
            image: "decumagrey",
            name: "Decuma Grey",
            color: new pc.Color(93.0/255.0, 93.0/255.0, 93.0/255.0),
            data: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAJAAkAwERAAIRAQMRAf/EAIsAAQEBAQAAAAAAAAAAAAAAAAgHCQUBAQEBAAAAAAAAAAAAAAAAAAEAAhAAAAIGBgQHBhcAAAAAAAAAAQMRAhMEBQYAEhQVFgchMRcIQVFxQiMYGWEiUjMkJvCBkbHB4WKiskNTYzRkhJQlRmYnRygJEQEAAgIDAAAAAAAAAAAAAAAAESFBYQExgf/aAAwDAQACEQMRAD8Aa+8rvOZxT1nhmvDzsyZxg8Ilyf5uliXoBAZljEEg0KhMux6IQWHlEw+Gvbo6rvi7q6KrHvCygmnGCIrChABIMZyn/OYVDRJzYzPL0ChlPs1qfBiwUgGk/wCZGfhQHMc6c3ykVkMsyZzURr097GgogN5ozz3nIC/qRGFbwmecOfXI9V4dXpzzYn13OIOKWrFmFGFR5VZRdRbUIaQpC293afb2/ZI33tAi22faRsk2vNfPbCTG9LwvNDTFd0+Q3l9MR5TXtfT0jNeoXm7N6qm8dn47Cb4nO3NUlFbUynuPKI97QLvu57tG3MFFqomVNA6BSkNSB4aRROeZNVOUNQUGkFubx+rSAQZhyH49BPhc3log7cKD2b9yMxTt/tVVHBhNolHEikor1C8852s+9ZvKO4moYbwecpKK2pnmPMhaNfuaSV2RpzVOUJATdYBrW5KBXUxR2jjnWAAWMqdwa2j1+OkR7nuS1TVDhAoNICjveXuUgYuEg6odxMv5YtlRH6DaVvZo7FxDD7ecmg+Gb5e9c5HtHc503mc9Xc0k1VYs0ownNKaS1lFy1wBZRdUVUCAoEKQyo2Xc+eIBt4PO9vVSJuyROCpyhSTUpq870DQMq0/ubtGnNYxQAFcVO+AOHQlII400ibmF/wBoLnYinGbZmj43Zs0qIRWro0o10lOEH/1Z7GfrWztjfHnWDt6u17Ylelx4nYltsTM/NfFyEW6yeVtk2zpk0bHMZ7B2V+yqSXcnWR4Kjer6Sa2hCaQqSRlfqD9Hcu3ZGipaLJxghNeg1UEVKHVXtrldO1Fo2LYXncVmaVgqNrx/D6qfl+i8LRSTT7+rvVt/PN+Y6+rbQceWL7hZbt+yWT5qlnSf/9k='
        },
        {
            image: "deepaqua",
            name: "Deep Aqua",
            color: new pc.Color(79.0/255.0, 146.0/255.0, 155.0/255.0),
            data: 'data:image/jpeg;base64,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RiNQeGxAUgAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAOEJJTQPtAAAAAAAQAEgAAAABAAIASAAAAAEAAjhCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAHjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAjhCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAgAAAAAABUAAAABAAACQAAAAkAAAAABAAAAAAEAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADRQAAAAYAAAAAAAAAAAAAACQAAAAkAAAACABkAGUAZQBwAGEAcQB1AGEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAACQAAAAkAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAAkAAAAAFJnaHRsb25nAAAAJAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51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Ij4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6Y3JzPSJodHRwOi8vbnMuYWRvYmUuY29tL2NhbWVyYS1yYXctc2V0dGluZ3MvMS4wLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGNyczpBbHJlYWR5QXBwbGllZD0iVHJ1ZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wOkNyZWF0ZURhdGU9IjIwMTEtMDgtMTJUMDk6MTk6MjQrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDExLTA4LTEyVDA5OjIxOjU5KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDExLTA4LTEyVDA5OjIxOjU5KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMThEQkJCNzgwOTU4RkQyRjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMThEQkJCNzgwOTU4RkQyRjkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOERCQkI3ODA5NThGRDJGOSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxODAxMTc0MDcyMDY4MTE4REJCQjc4MDk1OEZEMkY5IiBzdEV2dDp3aGVuPSIyMDExLTA4LTEyVDA5OjIxOjU5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/uAA5BZG9iZQBkQAAAAAH/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAQEBAQICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//AABEIACQAJAMBEQACEQEDEQH/3QAEAAX/xAGiAAAABgIDAQAAAAAAAAAAAAAHCAYFBAkDCgIBAAsBAAAGAwEBAQAAAAAAAAAAAAYFBAMHAggBCQAKCxAAAgEDBAEDAwIDAwMCBgl1AQIDBBEFEgYhBxMiAAgxFEEyIxUJUUIWYSQzF1JxgRhikSVDobHwJjRyChnB0TUn4VM2gvGSokRUc0VGN0djKFVWVxqywtLi8mSDdJOEZaOzw9PjKThm83UqOTpISUpYWVpnaGlqdnd4eXqFhoeIiYqUlZaXmJmapKWmp6ipqrS1tre4ubrExcbHyMnK1NXW19jZ2uTl5ufo6er09fb3+Pn6EQACAQMCBAQDBQQEBAYGBW0BAgMRBCESBTEGACITQVEHMmEUcQhCgSORFVKhYhYzCbEkwdFDcvAX4YI0JZJTGGNE8aKyJjUZVDZFZCcKc4OTRnTC0uLyVWV1VjeEhaOzw9Pj8ykalKS0xNTk9JWltcXV5fUoR1dmOHaGlqa2xtbm9md3h5ent8fX5/dIWGh4iJiouMjY6Pg5SVlpeYmZqbnJ2en5KjpKWmp6ipqqusra6vr/2gAMAwEAAhEDEQA/ALdO7+8Ow96do7+pareW4KTG4jd+4cNh8Rj8zX4/F4ygw2VqcdRww0dHPBTfdeClUzTFTJLJd2P9J22PY9qg2uzBsYnlaJWZmRSxYgE5I4DyFaAeXWAfPfPXNm4cz7y/77uobWO4kSOKOV0jREdlXtVgC1BVmOWJPlQAsG6M/wBglXMO995R/XSF3Nml5txbTW/09mEu0bd+Hb4QP9In+boP23N3MdRXmC9/5zy/9BdFc3nuntOIT+Hsbf8AGCGBKbx3Eg51XBtk7m9/ZZNtVgK6bGEf7Rf83QntOa9+ald8u/zmk/6C6LHm+z+8MDkIcnjO2uzqSsoZ1qaWaHfe6FaOaJtcbAHK21IR9T7LZNts1P8AuHF/vC0/wUP59Ce15l3pgP8Ad1dA+vjSA/kQ3H9nVwP+z8fIj/ZJfs/72V/9/v7+/wBwv9Ifnl/vb/dT+5v96fL/ABXX5v7wW/yP7/8A4FeH93V91+97Cn7stP61fS+Cv0tNejFPg1U9NNc0pSmKUx1Lf9a94/1pf3n9fJ+8vE8Dxa/qU8bRq1cdejGv4q91dWev/9A4m/dzCPuTtiDX/mezd+QfX6ePdOVX+vNveQW1S0sLD5QoP+MjrnVzVbf7vd7NP+Jc3/VxulJDLT5an0mxfTa39bfi3J49nNQw6BrAxN8ugn3btdZFkPi5tf6cf7Dn8e0ssQNcdGtpdEUz0Uveu0OZSIrfUfT8nn6f7H2VTRccdCuyvOGcdGs/gY/2Xv8Ah2kW/wBK/mtYW/5k/f6fT6+whT/kaf8ANj/nzqW/qf8AmBvi1/5aVP8As46//9Fa9n7r8Hf3dsPkt4e4OyUte1vHvTNLb+v49zltk1LO0z/oSf8AHR1gbzPaV3neDTjdS/8AH26FTaO6RIIhr545v9R9Tf2fRScOgDd2tCTToX3WDK0t15k0/wC34+v9bg+1fxjooGqJqHh0Cu8Nq61kIj/1X4/w4t/Uj2jmi6OrS6oRnoXv4UP9Gn8O0/8ANStdrcf8yev7Aen/AJHOn/hH/PnU1eN/4D94n/SU/wC1jr//0gp7xz8+P+THyDpJjJDJTd59r080Miskkbxb+zyNHIjAFHVhpII49zDt8v8AilqQceGv+AdYY8yWhG7bqGWjC5l4/wCnboQNk7w/zP7t/oSL8/X+h9nsM3DOOgHe2fHHRstpboWVYlMn1tzf/eR+ePZpFLw6Ct3bUJx0JVZS0+Vpi6gFgnI4/wBv/sT7UkBx0Wo7RMAeFel99gn8J+w/tf6QvHot/u7/AENeXxW/46+H16f6f7f3HuP6/aaivgU/Pw6/4M9TpWT/AIHDxtPb+9K8MU+p01r6asV9ccev/9M9n8x//htv/Zjt2fd/6Q/9MH8Tk/0o/wCiD7L+7v8AefxQ/c/xz+Lf7hP7zX/4HfY/ufc6/uv8o1+xTtv9Yvpo/o/9x6durRw+Vc09K/l1FHM3+tt+8rn971/eOr9Tw/E+KmdWjs1ev4q/FmvRPtv/AOyZWj/hP+zFX50+b+5V/wDC+r0/8a9nCf1yxo0f9U+gXcf6zVD4v1H/AFX6HPAf7L9x/Cf9O340+X/R9/sbeT/D6+1if15zp8L/AKp9Ec/+sPU+L9X+X1H+ToYsF/cDXF/Dv9Meq50ef/RX9fx/wP8A8h1/8tf2/wDVe1P/ADEDSdHhV+XhV/KuOip/+B11/rfWaK5/3KpxzXR3/wC859Oj0/8AOMX+y6f8x/8A3k/0g/8ANj/SN/pA+z/84/tP4X/1R/Zf82fYG/3e/v3/AET9++J8tWrT/vOnT/tdH9Hqd/8AmHH+tz/xF/1ufp/6Xh6Nf/OTxPG/5u+L/T6//9k='
        },
        {
            image: "eclipseblack",
            name: "Eclipse Black",
            color: new pc.Color(41.0/255.0, 41.0/255.0, 41.0/255.0),
            data: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAJAAkAwERAAIRAQMRAf/EAIwAAAMAAwAAAAAAAAAAAAAAAAcICQUGCgEBAQEAAAAAAAAAAAAAAAAAAQACEAAAAgYGBwEIEgMAAAAAAAACAwERBAUGCAASExQVByExQRYXGBlRYXHBIjJSMySBkUJicpKywiNjgzREJUVlCSmFJkgRAQACAgIDAAAAAAAAAAAAAAABIRFBMWGBEiL/2gAMAwEAAhEDEQA/AFC/kAnqmizQm4mEdjZnjmbD8MQRnDmNAcFQZCUcRJDEKw7DkFRa+IZcxTK5HG8Xe7jHoe73cATY2jLS0tZ4hCGJVUIVieU94gz6mOSEaS8/s7Qa1VM1Y8D8l/IpIvkUTATOF2llMTnwDX5GbuYIdXwYhRSIBPSaCbdytpLxdMz8xbsb2I4LQyNrBnZmWxtbKeUKsWcztDPExZxJpYtKBBEgSE6k0DnLp86w07nQU374pPvmE4ucAeO9qjiHuZfL3jWMVK+/G7/5bi9W+/i7S++sUsFIybF/IDOTNmVX0lzOZ8lqX5makVh8FFgPijCnkz1UqSOro1LT3NPcpAOokh9BgRqLRt2UiW+K4Z9Imz7dlIq6YF/Rrh1T/ry3qq/aqy1eCg0S6b+IrGd2cIqv6KamYMtS9VTNuLg+CizLDQ1EKBhLWZ2be9SAmDCS8mdKVISOqvtWjb7KKQCqJodQNBii/O2L10iqxgSOjrhtTRzS3hX+Br+1SOvKLc7j2aHdPnOqxNIDWZoZZuZjmc4g4AizSTCc44yAMswsaAjAMAkKShKEJRQMtWhOJvRotOzbREmNhx/oGEtY1rVtpBvTUzkvFnSMKEJFV0o7+1CtVIK2YAb0rrldzKnMTefITq3ds6y9SrbxV+do10tmsdj/APzNdALnHj7izxE5m8QBxu5esfwPeu7l22+N1/0zfeorEbn6/brv30y6DaYLl6C3iYdzc60VbW9/OpIXXL0U1Aw7mnX7m2tuzQutSsUL0NdIK/sV35i6tuUrE13XykfeNll2r2UbHy6DP65Onx+ocI8Z95vJvLV+PerX7S1+spWa9en/2Q=='
        },
        {
            image: "sintrablue",
            name: "Sintra Blue",
            color: new pc.Color(176.0/255.0, 213.0/255.0, 231.0/255.0),
            data: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAJAAkAwERAAIRAQMRAf/EAKUAAQEBAQEAAAAAAAAAAAAAAAYHBQgKAQACAwEBAQEAAAAAAAAAAAACBwEEBQYAAwgQAAACBgcFBAYLAQAAAAAAAAECABESAxQFITFBIhMEFVEyBhYXYSMkGHGRoTNEJ4HhUmKDNWVGlocIKBEAAQICBgYEDQUAAAAAAAAAAQARAhIhYQMEFAUxobGyExZBMiZGUXGBwUJjcyRkdBUlNfDhImKi/9oADAMBAAIRAxEAPwD1+Z+ZnmUyz8Q8MdnN5l07Axlg6du3xyEdkCoClAFKCuutHPk92sLtltiLGECayhJLUkmEEknppX5+z++Xi95teDeIzFLbRwwgksIYYiAAOgADaTSUSm0rA5TCBfZYmosQ6VH59JN+5tsQnQEKPTSXv8o+xsud45euzNEeOzCUxRAaBAQUkRQQ2kJhjAMJ6Cps7S0sYxaWURhtAXBBYpN1f41xenup5mB1pePjvIqA5K1rTMdvGhdRvMtKYublCLLA3bmPgSjh9Zuh28Gvxp54+8cuYiY8WXTr06avEuhnk2As9nDtr3c3mJFLqZzj4qvYjAy38dd/YwboSdzY/db18xab5TDLv3ebdMmEBFVA+lLlCpBGpxKQOU93bYkoSo7PpJv3NtiSgIUcgfm5DM/Hrqs6aIvO9Fcic3dPyeZWfPzjD4r4jdtbnEE5Ipf2ZjmSq22J22W/jrv7CDdCVObH7tevmLTfiVHkk4AwEvbLUuFUQU+Id3nHShU0r1pFCMIdOZQBgPd22elJQkLnWB+fkKz8Q0r+s0X3el/6JwP2S/XgWVxHMHmV444vcvQM7O64qn5DEMsolEs2zYUgKdrlZEWW3cw0jgQboSrzkGDN71DEGOItN8pxIZ3uX9lqXWVAFWWSzcDAS9sQUbpmYHedc0KEyvX9aeRALmfwvmbhcZ01H6cy2H5j0mjoLZEwneMbzFKL6aHmrSOp5n2JvSR8pMxd/wBtq3f9F9Fucn0Xz7zT3eucgsYGNhhh6hEeFjcJlpi+ypqxMbLuZMOPp3Hwrlm6tbPXpah61pZryjiz9VwuNYPM01UzUu2h6WqUPynTiiD8w/3WNH7FLX2JodsvX6lndgPhNaU5PQ6IPzJ9jGhdiq0Htl6//K8OQfhdaSZaJV4bzPVUYWgN1D7tnvMTYzeXVSgx83y/y48rVL6WXIvEHDwvEejTp8tC3P8AmnpF+9dR5+/XusfVWI/knNcT+L9Cc171iPTxc9c0219a6/3XDehhZapZdjMv/9k='
        },
        {
            image: "tidalblue",
            name: "Tidal Blue",
            color: new pc.Color(62.0/255.0, 78.0/255.0, 112.0/255.0),
            data: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAJAAkAwERAAIRAQMRAf/EALEAAAICAwAAAAAAAAAAAAAAAAcJBggEBQoBAQEBAQEAAAAAAAAAAAAAAAUGBAcIEAAAAwQGBgUHCwUAAAAAAAABAgMREgUGABMEFQcIIUFRFBYXMWEjGBmBsSJSMyQmcZGhweEygmOTRlZHKDgJKREAAAQDAgYMCgsAAAAAAAAAAAERAwISBBMFITFBFBUWUWGBkaGx0SJCYoJDccGSorLCI2MlF/AycjODJERkBiYn/9oADAMBAAIRAxEAPwCO52c5WYvEXM7jlD7VjFiHA5elDFSfJMlKVJYnCPy7LkCgMpTPFZehKVnhEHt9isJ4irYYeQ1qtZ0xXtKxjGOZjpS+jv4zcl0MXLTysNG84zBFFFFCRxRRRQlEamZGaKeAsREOXXrX1rlc4rkZNwxmRERmRERGZFgLLsmKMx7GrH0SnFPG/GEugWOYlzoXzRsKIVN0UKGjDRdiHkGZqtqMrkflHygBzPjfmLJWVePONRGALHMUp5L5o6Gyk3V3VSkqNNl2S5AszWPHjji3zAJiWY/NJBbcjEYXmNx5h9usSxbRZbVZMXsQbMvZ1kxeTVRVSmEh01CiDQEBAQ1Umaq72IcTcHklyBVqpjMi50W+OjHxVM3vg38T8xIvzs5mcneclb8ccJMvG870df4tuj3C82b4z3l/e+3pKaMp9PZtKVjLNLkxKngXJuBnO3NH2q8+aVcuPHvBYmZWOgXNdmaSfDs8w2NCfT6mJMyl+qnZ7gqEuumLYYb9AhB3i1+bdP3kXpGIekolEUHRYJndA7dHRSoI4XYUygk1gPaA8mOAgcqguNaA6qGVVMo1suiu80y17QXNo9HkpLVlJjwBdh4NHuX/AJOXc4H+Slc6wf44835qR2bnrhZJ+n9UOWvwSf3njFRM0cw1WcDNQlWMq8yeOabG+pihNBfoZSluSploWIdhqD0SBVe0tQ4fXPjGNLkfA4EB/ZrpZ0tSRkQCeaQEgwJRGziOgTu6tf20VMidh2xjU4DAumSXwOVQXGtAdVB6qmUbWXQy+4w8Nm7av+vm8O9fCb7WMpDZt/oNl+zXzBQWh6sz+/TzgnrN9Fl4fnVzdWS0FUQXsuaHH1BVFYhklUlEsVpsIdNRM4AYhyiGkBBoUIuqplpmiI+7h4iG+saV2P7R8Y0srTLoT9PZr2UsKOrxAR9nCLES7HgUKQH9mulPS1JGmEEPNCb2lBKIICcoA8zSAeeiMcMLsKkMsMRwmGfXGfuI7lUmZzjrmOCxvBrrGdH39Hy0iLKH5p2XSzHFt2S8WEPznqfPkzj10BE/23eCV3sZ45h8fd4ffyc4eRl7XHxPUJ13FNT8KcYOs3/dPfK5u+ds2nHru0xZFmyWWSZODKn0IXFTmU/tfr7Shc0H8Gv0bv7z+p2sf6mNbSgY1q7qy3UBjmh+nPwgswbwpWF3DvHdVa75Gt6qNMa94LLN92UYHNXunacILUteGpv9h3Tnl7dJ28913V54Ha+v7Crb0v8Ao7aKt/MtPY5rPk+79bmr4cGyMceqi8+2Ret4sO9hDu/7E+5L+4OEuJvyeL+Lar9N6r/Czrpzf+1a09/rTbbU86eTLJ+HZ9QVHwbQ/d6Gs+yi76zdqbrD/9k='
        },
        {
            image: "tyrolsilver",
            name: "Tyrol Silver",
            color: new pc.Color(223.0/255.0, 225.0/255.0, 224.0/255.0),
            data: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAJAAkAwERAAIRAQMRAf/EAIQAAQEAAwEAAAAAAAAAAAAAAAgHBAUGCgEBAQEBAAAAAAAAAAAAAAAAAQACAxAAAAMFBgIGBA8AAAAAAAAAAQIDERITBAYAITEFFRYUF0FhcSIjGFGBMgdCUmIzg6MkRCW2J0dnCDgRAQACAwEAAwEAAAAAAAAAAAABEUESIiExYYFC/9oADAMBAAIRAxEAPwD15p1RN56KxzzswmZQ5zJkSmFU00QERdTIUhwAClAMcRxEWttqnCZm09qhLPyEOMvneco3GZBzOeTZ2OLlZZVyLdZz1ey8UZesavQY8yDUecpM7HJ0rLNQbkYM7rv3t5NmKM3Ke8avCnl1yKAmaragOkYCnBpDpmzASsMHrDEGDfaqDZo+Zqv+S8Hi1N3b92HuRhOM4TRdd4112Hx/BeDExf7+NsZrDp7rtl19KVYBlRIKuCpysbgw4hbTjK5ILIZvKgUXTHdYAiy8GYD12gklYUqVUqnhgLQHotEQ62o1hziCWBvR12SztMDa/Au38/nWX4cr4uFsZdP5YNKVi7PLki+zNLhizBYwW25lpR1VlVIkAq4s6bAWRQsvnEqIg6Krotwvux7bQRCsKTKo+MMMW4ddopFpv4pprB/0GxjP4bj2MuvugJZNU6ktnE8kcxiHSzGcTMQzSmKYk0oUxRLiAgIMwbbbEldQ1Z/MgKvxfhWAXdIVSVUiQRAvd6eywFOm5RDNpd8hSmOId4A9PpZ1jaA28KnzK4RpXPMRDeaDsTkWxx7B+N3GYvXY3WMu18Cd/ZTy6c3Kn2ZvHWNXnNz7Z0rbmvx1NU4TU74/FvRoXhRXultqNqE1n5cRT+mtT0jmC252Ls1n1lmdvxcrrT3MFiekbvZc7F5eepsWx0OPulgyzzDwR03czzvhwOUfFtZ931T7DHZ7MXuNxtTa4tvv0f8AL5+4e6OYvXza5z6v+YNW+id+RbLfj//Z'
        }
    ];

    var UI = function (entity) {
        this.entity = entity;
        this.palette = null;
    };

    UI.prototype = {
        initialize: function () {
            var canvas = document.body;
            if (canvas) {
                this.palette = document.createElement('div');
                this.palette.style.borderRadius = '3px';
                this.palette.style.backgroundColor = 'white';
                this.palette.style.padding = '3px';
                this.palette.style.position = 'absolute';
                this.palette.style.left = '0px';
                this.palette.style.top = '0px';
                this.palette.style.margin = '5px';
    
                document.body.appendChild(this.palette);
    
                for (var i = 0; i < colors.length; i++) {
                    var color = document.createElement('div');
                    color.style.cssFloat = 'right';
                    this.palette.appendChild(color);
    
                    var clickable = document.createElement('a');
                    clickable.setAttribute('href', 'javascript:void(0)');
                    clickable.onclick = (function() {
                        var index = i;
                        return function() { 
                            var car = context.root.findByName('Car');
                            car.script.materials.changeColor(colors[index].color);
                        };
                    })();
                    color.appendChild(clickable);
    
                    var image = document.createElement('img');
                    image.src = colors[i].data;
                    image.setAttribute('alt', colors[i].name);
                    image.setAttribute('width', '36');
                    image.setAttribute('height', '38');
                    image.setAttribute('border', '0');
                    clickable.appendChild(image);
                }
            }
        },

        setVisibility: function (visible) {
            this.palette.style.visibility = visible ? 'visible' : 'hidden'; 
        }
    };

    return UI;
});