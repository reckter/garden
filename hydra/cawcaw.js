/* preview:
https://flok.cc/s/pale-white-marmoset-2df27021#targets=hydra%2Cstrudel&c0=Ly8gbGl0dGxlIGNhd2Nhdwpjb25zdCBiYW5nVG8gPSAiYmFzcyIKLy9oZWFkIGJhc2UKc2hhcGUoOTksLjE1KQovLyBiZWFrcwouYWRkKHNoYXBlKDMsLjEpLnJvdGF0ZShNYXRoLlBJICsgMy8yKS5zY2FsZSguMywzLDEpLnNjcm9sbCgtLjEsMCkKLnJvdGF0ZSgoKSA9PiBmZnQoMCwxLCJjYXciKSAqLjI1KSkKLmFkZChzaGFwZSgzLC4xKS5yb3RhdGUoTWF0aC5QSSArIDMvMikuc2NhbGUoLjMsMywxKS5zY3JvbGwoLS4xLDApCi5yb3RhdGUoKCkgPT4gZmZ0KDAsMSwiY2F3IikgKi0uMTUpKQovLyBleWUKLm1hc2soc2hhcGUoOTksLjA3KQouc2NhbGUoLjMpCi5zY2FsZSgxLDEsUCgiPDEhNjQgLjM%252BKjE2IikpCi5zY3JvbGwoLS4wMiwuMDIpLnNjcm9sbFgoKCkgPT4gTWF0aC5zaW4odGltZS80KSAqIC4wMikKLmludmVydCgpKQoKLy9oZWFkIGJhbmdpbmcKLnJvdGF0ZSgoKSA9PiBmZnQoMCwxLGJhbmdUbykgKjEuNSkKLnJvdGF0ZShbLS4yLC4yXS5lYXNlKCJlYXNlSW5PdXRRdWFkIikuZmFzdCgxLzQpKQouc2Nyb2xsKC4wMSxbLjA0LDBdLmVhc2UoImVhc2VJbk91dFF1YWQiKS5mYXN0KDEvMjMpKQovLyBib2R5Ci5hZGQoc2hhcGUoOTksLjIpLnNjYWxlKDEsMikKLnJvdGF0ZSgtLjgpCi5zY3JvbGwoLjE0LC0uMTQpKQovLyB0YWlsCi5hZGQoc2hhcGUoNCwuMSkgLnNjYWxlKC4yLDcsMSkgLnJvdGF0ZShNYXRoLlBJICogMi8zKSAucm90YXRlKDApIC5zY3JvbGwoLjMsLS4yNSkKLmFkZChzaGFwZSg5OSwuMikgLnNjYWxlKC4yLDcsMSkgLnJvdGF0ZShNYXRoLlBJICogMi8zKSAucm90YXRlKDAuMSkgLnNjcm9sbCguMzI0LC0uMjcpKQouYWRkKHNoYXBlKDk5LC4zKSAuc2NhbGUoLjIsNCwxKSAucm90YXRlKE1hdGguUEkgKiAyLzMpIC5yb3RhdGUoWy0wLjEyLC4xMl0uZWFzZSgiZWFzZUluT3V0UXVhZCIpLmZhc3QoMS8yMikpIC5zY3JvbGwoLjI5LC0uMjUpKQovLyB0YWlsIGJhbmcKLnNjcm9sbCgtLjIsLjIpLnJvdGF0ZSgoKSA9PiBmZnQoMCwxLGJhbmdUbykgKiAuNCkuc2Nyb2xsKC4yLC0uMikKKQogIAovLyBiYW5naW5nCi5zY3JvbGwoLS4yLC4yKS5yb3RhdGUoKCkgPT4gIGZmdCgwLDEsYmFuZ1RvKSAvMS40KS5zY3JvbGwoLjIsLS4yKQogIAovLyBsZWdzCi5hZGQoc2hhcGUoMiwuMDAxKSAubWFzayhzaGFwZSg0LC4yKSkgLnJvdGF0ZShNYXRoLlBJLzIpIC5zY3JvbGwoLjE1LC0uMykgKQouYWRkKHNoYXBlKDIsLjAwMSkgLm1hc2soc2hhcGUoNCwuMikpIC5yb3RhdGUoTWF0aC5QSS8yKSAuc2Nyb2xsKC4xNiwtLjMxKSApCi5tYXNrKHNoYXBlKDQsMSkpCgovLyBwb3NpdGlvbmluZyAKLnNjYWxlKC43KQouc2Nyb2xsKC4xNiwtLjE2KQoub3V0KG8wKQ%253D%253D&c1=CiQ6IHMoImJkKjQiKS5hbmFseXplKCJiYXNzIikKCiQ6IHMoImNyb3ciKS5hbmFseXplKCJjYXciKQ%253D%253D
 */

// little cawcaw
const bangTo = "bass"
//head base
shape(99,.15)
	// beaks
	.add(shape(3,.1).rotate(Math.PI + 3/2).scale(.3,3,1).scroll(-.1,0)
		.rotate(() => fft(0,1,"caw") *.25))
	.add(shape(3,.1).rotate(Math.PI + 3/2).scale(.3,3,1).scroll(-.1,0)
		.rotate(() => fft(0,1,"caw") *-.15))
	// eye
	.mask(shape(99,.07)
		.scale(.3)
		.scale(1,1,P("<1!64 .3>*16"))
		.scroll(-.02,.02).scrollX(() => Math.sin(time/4) * .02)
		.invert())

	//head banging
	.rotate(() => fft(0,1,bangTo) *1.5)
	.rotate([-.2,.2].ease("easeInOutQuad").fast(1/4))
	.scroll(.01,[.04,0].ease("easeInOutQuad").fast(1/23))
	// body
	.add(shape(99,.2).scale(1,2)
		.rotate(-.8)
		.scroll(.14,-.14))
	// tail
	.add(shape(4,.1) .scale(.2,7,1) .rotate(Math.PI * 2/3) .rotate(0) .scroll(.3,-.25)
		.add(shape(99,.2) .scale(.2,7,1) .rotate(Math.PI * 2/3) .rotate(0.1) .scroll(.324,-.27))
		.add(shape(99,.3) .scale(.2,4,1) .rotate(Math.PI * 2/3) .rotate([-0.12,.12].ease("easeInOutQuad").fast(1/22)) .scroll(.29,-.25))
		// tail bang
		.scroll(-.2,.2).rotate(() => fft(0,1,bangTo) * .4).scroll(.2,-.2)
	)

	// banging
	.scroll(-.2,.2).rotate(() =>  fft(0,1,bangTo) /1.4).scroll(.2,-.2)

	// legs
	.add(shape(2,.001) .mask(shape(4,.2)) .rotate(Math.PI/2) .scroll(.15,-.3) )
	.add(shape(2,.001) .mask(shape(4,.2)) .rotate(Math.PI/2) .scroll(.16,-.31) )
	.mask(shape(4,1))

	// positioning
	.scale(.7)
	.scroll(.16,-.16)