function solving()
			        {
					var mb  = document.getElementById("mb").value;
					var ms  = document.getElementById("ms").value;
					var mm  = document.getElementById("mm").value;
					var cb  = document.getElementById("cb").value;
					var cs  = document.getElementById("cs").value;
					var bm  = document.getElementById("bm").value;
                    var og  = document.getElementById("oj").value;
					var lsp = document.getElementById("lp").value;
                    var lsg = document.getElementById("lg").value;
					var pree= document.getElementById("pre").value;
					if(mb==" ") { mb=0; }
                    else if(ms==""){ms=0;}
                    else if(mm==""){mm=0;}
                    else if(cb==""){cb=0;}
                    else if(cs==""){cs=0;}
                    else if(bm==""){bm=0;}
                    else if(og==""){og=0;}
                    else if(lsp==""){lsp=0;}
                    else if(lsg==""){lsg=0;}
					else if(pree==""){pree=0;}
                    else{alert("ok");}
					mb=mb*67;
					ms=ms*43;
					mm=mm*62;
					cb=cb*68;
					cs=cs*43;
					bm=bm*32;
                    og=og*45;
					lsp=lsp*45;
                    lsg=lsg*16;
					pree=pree*1;
					var anser = (mb+ms+mm+cb+cs+bm+lsp+lsg+og+pree);
					document.getElementById("ans1").value=anser;
					}