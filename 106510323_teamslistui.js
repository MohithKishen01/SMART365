/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team(s) H/A Goal %</font></H5>    
*/

var m_arrNodes_TL = new Array ();
var m_arrSelectedIds_TL = new Array ();

function buildTeamListUI_106510323 ()
{
	UDModule.COMP.setDisplay ("trTeamOD", "none");
    UDModule.COMP.setDisplay ("trTeamList", "block");    

    var objCommon = new CommonListObj_BB ();
    objCommon.ArrNodes		= m_arrNodes_TL;
    objCommon.SelectedIds	= m_arrSelectedIds_TL.join ("_");
    
    objCommon.HeaderLeft	= m_arrHeaders_TL [iH_Teams_TL];
    objCommon.ColumnCount	= kColumnCount_TL;
    objCommon.ColumnWidth	= 200;
	objCommon.kE_ChkElement = kE_ChkElement_TL;	
	
	objCommon.kEM_NameClicked		    = "lblClicked_TL_106510323";
	objCommon.kEM_SelectAllClicked	    = "lblSelectAllClicked_TL_106510323 ()";
	objCommon.kEM_ClearAllClicked	    = "lblClearAllClicked_TL_106510323 ()";
	objCommon.kEM_CloseClicked		    = "closeClicked_TL_106510323 ()";
	objCommon.kEM_SetSelectionClicked	= "setSelectionClicked_TL_106510323 ()";
	
    UDModule.COMP.replaceDynamicHtml ("tdTeamList", objCommon.buildCommonListUI (objCommon));
}

function storeSelectedIds_TL_106510323 ()
{
	m_arrSelectedIds_TL = new Array ();
	
    for (var nIndex = 0; nIndex < m_arrNodes_TL.length; nIndex++)
	{
		var arrInfo = m_arrNodes_TL [nIndex];
		var nTeamId =  arrInfo [iTeamId_TL];	

		var oElement = UDModule.COMP.getElement (kE_ChkElement_TL + nTeamId);
		if (oElement != null && oElement.checked)
			m_arrSelectedIds_TL [m_arrSelectedIds_TL.length] = nTeamId;
	}
}

function getSelectedIds_TL_106510323 ()
{
    return m_arrSelectedIds_TL;
}

function setCommonList_TL_106510323 (arrNodes)
{
	m_arrNodes_TL = arrNodes;
}

function lblShowClicked_TL_106510323 ()
{
	if (isValidData_106510323 ())
	{		
		UDModule.COMP.setDisplay ("tdShowTeams", "none");
		UDModule.COMP.setDisplay ("tdHideTeams", "block");			

		buildTeamListUI_106510323 ();
	}
}

function lblHideClicked_TL_106510323 ()
{	
	UDModule.COMP.setDisplay ("trTeamOD", "block");
    toggleView_TL_106510323 ();
}

function lblClicked_TL_106510323 (nTeamId)
{
    var oElement = UDModule.COMP.getElement (kE_ChkElement_TL + nTeamId);	
	if (oElement != null)	
		oElement.checked = !oElement.checked;
}

function lblSelectAllClicked_TL_106510323 ()
{
    for (var nIndex = 0; nIndex < m_arrNodes_TL.length; nIndex++)
	{
		var arrInfo = m_arrNodes_TL [nIndex];
		var nTeamId =  arrInfo [iTeamId_TL];	

		var oElement = UDModule.COMP.getElement (kE_ChkElement_TL + nTeamId);
		if (oElement != null)
			oElement.checked = true;
	}		
}

function lblClearAllClicked_TL_106510323 ()
{
    for (var nIndex = 0; nIndex < m_arrNodes_TL.length; nIndex++)
	{
		var arrInfo = m_arrNodes_TL [nIndex];
		var nTeamId =  arrInfo [iTeamId_TL];	

		var oElement = UDModule.COMP.getElement (kE_ChkElement_TL + nTeamId);
		if (oElement != null)
			oElement.checked = false;
	}		
}

function closeClicked_TL_106510323 ()
{		
	UDModule.COMP.setDisplay ("trTeamOD", "block");

	UDModule.COMP.setDisplay ("tdHideTeams", "none");
	UDModule.COMP.setDisplay ("tdShowTeams", "block");	
	
	UDModule.COMP.replaceDynamicHtml ("tdTeamList", "");
}

function setSelectionClicked_TL_106510323 ()
{	
    storeSelectedIds_TL_106510323 ();
    toggleView_TL_106510323 ();
}

function clearValues_TL_106510323 ()
{
	m_arrSelectedIds_TL = new Array ();
    toggleView_TL_106510323 ();
}

function toggleView_TL_106510323 ()
{
    UDModule.COMP.setDisplay ("tdShowTeams", "block");
	UDModule.COMP.setDisplay ("tdHideTeams", "none");
	UDModule.COMP.setDisplay ("trTeamList", "none");
}