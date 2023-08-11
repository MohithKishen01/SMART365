/*
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team(s) H/A Goal %</font></H5>    
*/

var m_arrSeasons = new Array ();

function leagueChanged_106510323 ()
{	
	clearViews_106510323 ();
	clearValues_TL_106510323 ();
	
	if (getLeagueId_106510323 () > 0)	
		fillSeasonMod2_106510323 ();	
	else			
		UDModule.COMP.fillDefaultValueDD ("cbSeason", 0, "[Choose One]");

	setSeasonDates_106510323 ();	
}

function seasonChanged_106510323 ()
{		
	clearViews_106510323 ();
	clearValues_TL_106510323 ();
	
	setSeasonDates_106510323 ();

	var xmlDoc = UDModule.PROJ.processRequest (getTeamsParam_106510323 ());
	if (UDModule.PROJ.isValidStatus (xmlDoc))    
	{
		if (isValidStatus_T5_106510323 (xmlDoc))
		{			
			var nodeList = xmlDoc.getElementsByTagName (kSR_Teams);
			var arrNodes = UDModule.DOM.convertNodesToArray (nodeList);
			setCommonList_TL_106510323 (arrNodes);
		}
	}
}

function setSeasonDates_106510323 ()
{	
	UDModule.COMP.getElement ("txtFromDate").value = UDModule.DATE.getCurrentDate ();
	UDModule.COMP.getElement ("txtToDate").value = UDModule.DATE.getCurrentDate ();

    if (m_arrSeasons != null && m_arrSeasons.length > 0 && getSeasonId_106510323 () > 0)
    {
        for (var nIndex = 0; nIndex < m_arrSeasons.length; nIndex++)
        {
            var arrInfo = m_arrSeasons [nIndex];
            if (parseInt (arrInfo [iS_SeasonId]) == getSeasonId_106510323 ())
            {
                UDModule.COMP.getElement ("txtFromDate").value = arrInfo [iS_StartDate];
                UDModule.COMP.getElement ("txtToDate").value = arrInfo [iS_EndDate];
                break;
            }
        }
    }
}

function liveStatusChanged_106510323 ()
{	
	clearViews_106510323 ();
	toggleView_TL_106510323 ();
}

function showClicked_106510323 ()
{	
	if (isValidData_106510323 ())
	{		
 		toggleView_TL_106510323 ();
		showTeamODUI_106510323 ();
	}
}